import React, { useState, useContext } from 'react';
import { BooksContext } from '../context/BookContext';
import BookEdit from "./BookEdit";

const BookShow = ({ book }) => {
  const [showInput, setShowInput] = useState(false);
  const { deleteBook, changeBook } = useContext(BooksContext);

  const randomCover = `https://picsum.photos/seed/${book.id}/300/200`;

  const onChange = (id, title) => {
    changeBook(id, title);
    setShowInput(!setShowInput);
  }

  const makeContent = () => {
    let content = (
      <div>
        <img src={randomCover} alt="book cover" />
        <h3>{book.title}</h3>
      </div>
    );

    if (showInput) {
      content = <BookEdit book={book} onChange={onChange} />
    }

    return content;
  }

  return (
    <div className="book-show">
      {makeContent()}
      <div className="actions">
        <button className="edit" onClick={() => setShowInput(!showInput)}></button>
        <button className="delete" onClick={() => deleteBook(book.id)}></button>
      </div>

    </div>
  )
};

export default BookShow;