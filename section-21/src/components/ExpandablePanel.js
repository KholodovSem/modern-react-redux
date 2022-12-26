import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

export const ExpandablePanel = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="mb-2 border rounded">
      <div className='flex p-2 justify-between items-center'>
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {isOpen && <div className="p-2 border-t">{children}</div>}
    </div>
  )
};