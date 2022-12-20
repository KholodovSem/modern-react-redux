import Accordion from "./Accordion";

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
  const items = [
    {
      id: 1,
      label: "Can i use React on a project?",
      content: "You can use React on any project you want"
    },
    {
      id: 2,
      label: "Can i use JavaScript on a project?",
      content: "You can use JavaScript on any project you want"
    },
    {
      id: 3,
      label: "Can i use CSS on a project?",
      content: "You can use CSS on any project you want"
    },
  ]

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
