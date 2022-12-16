import './SearchBar.css';

/* 
    Никогда не получайте значение элементов HTML и впринципе ссылки с помощью
    document.querySelector или каким-либо похожим способом.
    React предоствляет ряд оптимизированных инструментов чтобы справиться с 
    данными задачами.
    В противном случае, мы можем получить некоректное поведение.
*/

/* 
    *Handling Text Inputs (Controlled element pattern)
    1) Create a new piece of state
    2) Create an event handler to watch fo the 'onChange' event
    3) When the 'onChange' event fires, get the value from the input
    4) Take that value from input and use it to update your state
    5) Pass your state to the input as the value prop.
*/

import React, { useState } from 'react';

const SearchBar = ({ getPhoto }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    setQuery(value);
  }

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      getPhoto(query);
    }
  }

  return (
    <div className='search-bar'>
      <div>
        <label className='label' for='input'>What to look for?</label>
        <input
          className='search-input'
          id='input'
          type='text'
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>)
}

export default SearchBar;