import React, { useState } from 'react';
import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (select) => {
    setSelection(select);
  }

  const options = [
    {
      label: 'Red',
      value: 'red'
    },
    {
      label: 'Green',
      value: 'green'
    },
    {
      label: 'Blue',
      value: 'blue'
    },
  ]

  return (
    <div>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>)
};

export default DropdownPage;