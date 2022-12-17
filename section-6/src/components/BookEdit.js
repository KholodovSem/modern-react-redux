import React, { useState } from 'react';

const BookEdit = ({ book, onChange }) => {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(book.id, title);
  }

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    setTitle(value);
  }

  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label htmlFor="change">Title</label>
      <input id="change" type="text" value={title} onChange={handleChange} />
      <button type='submit' className='button is-primary'>Save</button>
    </form>
  )
}

export default BookEdit;