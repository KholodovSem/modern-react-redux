import { useContext } from 'react';
import { BooksContext } from '../context/BookContext';
import BookShow from './BookShow';

const BookList = () => {
  const { books } = useContext(BooksContext);

  return (
    <div className='book-list'>
      {books.map((book) =>
        <BookShow
          key={book.id}
          book={book}
        />)}
    </div>)
}

export default BookList;