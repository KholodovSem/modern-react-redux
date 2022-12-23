import { useState } from 'react';

const useSort = (data, config) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);


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

  return {
    sortOrder,
    sortBy,
    sortedData,
    handleClick
  }
};

export default useSort;