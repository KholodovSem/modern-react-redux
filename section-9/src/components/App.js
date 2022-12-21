import React, { useState } from 'react';
import Dropdown from "./Dropdown";

/* 
    *React Hooks
    Это функции, который добавляют дополнительный функционал нашему приложению.
    Мы можем создавать пользовательские хуки.
    Они также как предоставляемые должы начинаться с "use[HookName]".

    *useCallback
    Реакт, при каждом ререндере создаёт новые переменные, это касается 
    и функций.
    Для того что-бы сохранить доступ к ссылке на созданую функцию,
    то есть защитить её от пересоздания (мемоизация).
    Мы можем использовать хук useCallback - возвращает мемоизированую
    функцию.

    Аргументы:
    Первым принимает функцию, которую необходимо мемоизировать.
    Вторым массив зависимостей, в случае изменения какой-либо зависимости
    вернёт новую ссылку на функцию.
*/

const App = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (select) => {
    setSelection(select);
  }

  const options = [
    {
      label: 'Red',
      value: 'red'
    },
    {
      label: 'Green',
      value: 'green'
    },
    {
      label: 'Blue',
      value: 'blue'
    },
  ]

  return (
    <div>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>)
}

export default App;
