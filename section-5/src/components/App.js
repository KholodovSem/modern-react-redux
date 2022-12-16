import React, { useState } from 'react';
import SearchBar from './SearchBar';
import searchImage from '../helpers/api';
import ImageList from './ImageList';

/* 
    HTTP-requests
    Запросы можно представить как обмен сообщениями между клиентом и сервером.

    Client   --------> Request
    Response <-------- Server

    *Structure HTTP-request:
    Request Line - GET(Method) http://example.com HTTP1.1
    HEADERS - Authorization: bla-bla-bla
              Content-type: bla-bla-bla
              and etc.
    Body?(optional)

    *Structure HTTP-response:
    Status Line - HTTP/1.1 200 OK
    HEADERS - Content-type: bla-bla-bla
              and etc.
    Body?(optional) 
*/

/* 
    Async code and ways to work with it
    Каждый раз делая запрос к какому-то серверу, нам необходимо
    время для того что-бы дождаться ответа от него.
    Это может быть 1 секунда, 10 секунд, возможно минута.

    JS работает синхронно, поэтому работу с запросами на себя берёт браузер.
    Варианты работы с асинхронным кодом.

    then().cath() - example: axios.get('bla-bla-bla.com').then(response => console.log(response)).catch(error
    => console.log(error.message)).
    
    async-await & try-catch - делает функцию асинхронной.
    !Всегда возращает промис.

    await - можно ставить перед любым промисом, внутри функции, которая инициализирована как 
    асинхронная с помощью слова "async".
    JS выполнит следующую команду в данной функции только после того, как дождется решения промиса.  

    try-cath - конструкция, которая позволяет правильно рабоать с асинхронным кодом и правильно
    обработать ошибку, если такая возникнет

    Example:
    const getImage = async () => {
      try {
        const response = await axios.get("bla-bla-bla.com");
        console.log(response)
      } catch(error) {
        throw new Error(error)
      }
    }
*/

const App = () => {
  const [images, setImages] = useState([]);

  const getPhoto = async (query) => {
    const data = await searchImage(query);
    setImages(data);
  }

  return (
    <div>
      <SearchBar getPhoto={getPhoto} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
