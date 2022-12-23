import { useState } from 'react';
import { GoArrowSmallUp, GoArrowSmallDown } from 'react-icons/go'
import Table from "./Table";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    if (sortBy && sortBy !== label) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    switch (sortOrder) {
      case null:
        setSortOrder('asc');
        setSortBy(label);
        break;

      case "asc":
        setSortOrder('dsc');
        setSortBy(label);
        break;

      case "dsc":
        setSortOrder(null);
        setSortBy(null);
        break;

      default:
        break;
    }
  }

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find(column => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    })
  }

  const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>)
    }

    if (sortOrder === "asc") {
      return (
        <div>
          <GoArrowSmallUp />
        </div>)
    } else if (sortOrder === "dsc") {
      return (
        <div>
          <GoArrowSmallDown />
        </div>)
    } else if (sortOrder === null) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>)
    }
  }

  const updatedConfig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => <th className='cursor-pointer hover:bg-gray-100 ' onClick={() => handleClick(column.label)}>
          <div className='flex items-center'>
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      }
    }

    return column;
  })

  return <Table {...props} data={sortedData} config={updatedConfig} />
};

export default SortableTable;