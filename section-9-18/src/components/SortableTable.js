import { GoArrowSmallUp, GoArrowSmallDown } from 'react-icons/go'
import useSort from '../hooks/useSort';
import Table from "./Table";

const SortableTable = (props) => {
  const { data, config } = props;
  const { sortBy, sortOrder, sortedData, handleClick } = useSort(data, config);

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