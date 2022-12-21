import React, { useState, useEffect, useRef } from 'react';
import Panel from './Panel';
import { GoChevronDown } from 'react-icons/go'

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectElement = useRef(null);

  /* 
      contains - метод, DOMNodes - возвращает буль, является ли элемент потомком указанного узла.
  */

  useEffect(() => {
    const clickListener = (e) => {
      if (e.target.contains(selectElement.current)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', clickListener, true)

    return () => {
      document.removeEventListener('click', clickListener)
    }
  }, [selectElement])

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const handleSelect = (select) => {
    setIsOpen(!isOpen);
    onChange(select)
  }

  const renderedOptions =
    options.map((option) =>
      <Panel
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        key={option.value}
        onClick={() => handleSelect(option)}
      >{option.label}
      </Panel>);

  /* 
      *Оператор опциональной последовательности
      Если у объекта свойство, к которому мы обращаемся есть, вернёт
      его значение, если нет, вернёт undefined
  */

  return (
    <div className='w-48 relative' ref={selectElement}>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown />
      </Panel>
      {isOpen
        &&
        <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  )
};

export default Dropdown;