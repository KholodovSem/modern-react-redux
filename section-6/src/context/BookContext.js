import { createContext, useEffect, useState } from 'react';
import { createBook, editBookById, fetchBooks, removeBookById } from '../helpers/api';

/*
    *React context
    Возможность предавать какую-либо информацию из одного
    централизованого места хранения. Альтернатива Redux.

    Using:
    1) Create the context 
    2) Specify the data that will be shared
    3) "Consume" the data in component
 */

export const BooksContext = createContext();

/* 
    CreateContext - это объект, который предоставляет два свойства:
    Provider - Обпределяет какими данными мы будем делиться и в каких масштабах (масштабах приложения).
    Consumer - Возращает компоненты, которые подписываються на изменения провайдера (если не используем хуки)
*/

/* 
    В коде ниже, реализуется паттерн, когда на приложение необходимо 
    рассшарить сложный, динамичный стейт.
    Мы создаём компонент, который в качестве ребёнка принимает другой 
    компонент (App). 
*/

export const Provider = ({ children }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchBooks();
                setBooks(data);
            } catch (error) {
                throw new Error(error);
            }
        })()
    }, [])

    const addBook = async (newBook) => {
        const data = await createBook({ title: newBook });
        setBooks([...books, data]);
    }

    const changeBook = async (id, title) => {
        const data = await editBookById(id, { title });
        const newBooksList = books.map(book => {
            if (book.id === data.id) {
                return data;
            };
            return book;
        });

        setBooks(newBooksList);
    }

    const deleteBook = async (id) => {
        await removeBookById(id);
        setBooks(books.filter(book => book.id !== id));
    }

    return (
        <BooksContext.Provider value={{
            books,
            addBook,
            changeBook,
            deleteBook
        }}>
            {children}
        </BooksContext.Provider>
    )
}

