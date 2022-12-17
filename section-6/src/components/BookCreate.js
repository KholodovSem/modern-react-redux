import React, { useState } from 'react';

const BookCreate = ({ addBook }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title);
    setTitle('');
  }

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    setTitle(value);
  }

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          className='input'
          id="title" type="text"
          onChange={handleChange}
          value={title}
        />
        <button className='button' type="submit">Create!</button>
      </form>
    </div>
  )
}

export default BookCreate;