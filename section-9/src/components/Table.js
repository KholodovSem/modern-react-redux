import { useState, useEffect } from 'react';

/* 
    What we need to create reusable table component? 

    1) Variable number of rows
    2) Variable number of columns
    3) Columns doesn't have to match of properties in object
    4) Some columns are sortable
    5) Sortable columns can be calculated using multiple properties
    6) Cells can be calculated using multiple properties
    7) Cells can display arbitary data
*/

const Table = ({ data, config, keyFn }) => {

  const theadContent = config.map(column =>
    <th key={column.label}>{column.label}</th>
  );



  const tbodyContent = data.map(rowData => {
    const cells = config.map((column) => {
      return <td className='p-2' key={column.label}>{column.render(rowData)}</td>
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {cells}
      </tr>);
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {theadContent}
        </tr>
      </thead>
      <tbody>
        {tbodyContent}
      </tbody>
    </table>)
};

export default Table;