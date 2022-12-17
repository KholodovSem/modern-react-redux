import BookShow from './BookShow';

const BookList = ({ books, deleteBook, changeBook }) => {
  return (
    <div className='book-list'>
      {books.map((book) =>
        <BookShow
          key={book.id}
          book={book}
          deleteBook={deleteBook}
          changeBook={changeBook}
        />)}
    </div>)
}

export default BookList;