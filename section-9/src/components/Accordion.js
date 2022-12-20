import React, { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

/* 
    What we need?
    Clicked on section header ===> One section is expanded, all others are collapsed

    How to realise this?
    1) We need state (boolean type)
    2) We need event handler
*/

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  /* 
      Сеттер из useState может принимать колл-бек для обновления состояния.
      Мы его используем в том случае, если нам необходимо получить доступ к 
      предедущему значению стейта.
  */

  const handleClick = (index) => {
    setExpandedIndex((currentIndex) => {
      if (currentIndex === index) {
        setExpandedIndex(-1);
        return;
      } else {
        setExpandedIndex(index);
      }
    })
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    /* 
        React dosen't print next values:
        1) Boolean
        2) Null
        3) Undefined

        JS Rules it will help us resolve this task: 
        "|" - gives back the first value that is trusty
        "&&" - gives back the first falsey value or the last truthy value
    */

    const icon =
      <span className='text-2xl'>
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>

    return (
      <div key={item.id}>
        <div
          className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>

        {isExpanded && <p
          className='border-b p-5'
        >
          {item.content}
        </p>}
      </div>)
  }
  );


  return (
    <div className='border-x border-t rounded'>
      {renderedItems}
    </div>
  )
};

export default Accordion;