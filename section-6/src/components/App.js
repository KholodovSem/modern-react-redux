import React, { useState, useEffect } from 'react';
import BookCreate from './BookCreate';
import BookList from './BookList';
import { createBook, editBookById, fetchBooks, removeBookById } from '../helpers/api';

/* 
    *useEffect (react-hook)
    Функция предоставляемая React.
    Первым аргументом всегда принает коллбек () => {}.
    Который будет выполняться в определённое время, которое мы можем определить
    используя второй аргумент.
    Второй аргумент - это массив зависимостей.
    У него есть сразу несколько настроек:
    1) Вообще не указывать массив зависимостей. Тогда колл-бек отработает при первом рендеринге компонента
       и его последующих перерендерах.
    2) [] Пустой массив зависимстей - Колл-бек выполниться только при первом рендере компонента.
    3) [someDepedencies] - Колл-бек будет выполняться в случае, если изменится одна из указанных зависимостей.
    4) [] with cleanup fn. Пустой массив, но теперь колл-бек должен вернуть функцию очистки.
       Используется для отписки от событий.
       Пример:
       useEffect(() => {
          variable.addEventListener('click', () => {}).

          return () => {
            variable.removeEventListener('click', () => {})
          }
       })
*/

const App = () => {
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
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} deleteBook={deleteBook} changeBook={changeBook} />
      <BookCreate addBook={addBook} />
    </div>
  );
}

export default App;

/*
  Correct updaiting state in React/Redux
*/

//* Add new element into state
//let state = ["HTML", "CSS"];

//! Bad code
//state.push('newElement'); - Реакт не будет делать перерисовку после этого маневра.
//Так как внутри сеттра проводиться неглубокое сравнение ссылочных типов данных.
//В данном случае, ссылка на массив не изменилась, перерисовки не будет.

//* Correct code
//state = [...state, 'newElement'] - Произойдёт перерисовка
//Мы создали новый массив, распылили в него старые элементы и добавили в конец новый.
//state = ['newElement', ...state] - Аналогичный вариант. Только новый элемент добавлен в начало.
//state = [...state.slice(0, 1), "JS", ...state.slice(1)] - //!Добавили элемент всеридину массива

//* Remove element from state
//state = state.filter(element => element !== "CSS") Фильтр возращает новый массив.
//Условием которого является возращение всех элементов кроме "CSS".

//* Remove element from state(Object)
// let state = {
//   color: 'blue',
//   name: 'car'
// };

// const { color, ...rest } = state; //rest - other object properties
// state = rest;

//* Changing element (string[])
// state = state.map(element => {
//   if (element === 'CSS') {
//     return "JS";
//   }
//   return element;
// }) - Map возращает новый массив, в условии мы нашли нужный элемент и изменили его

//* Changing element ({}[])
// let arrayOfObjects = [{ id: 1, name: "a" }, { id: 2, name: "b" }];
// arrayOfObjects.map(element => {
//   if (element.id === 1) {
//     return {
//       ...element,
//       name: "c",
//     }
//   }
//   return element
// }) - Изменили нужный объект, верунули тотже массив с изменённым объектом.