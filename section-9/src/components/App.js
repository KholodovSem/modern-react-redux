import Route from './Route';
import SideBar from './SideBar';
import DropdownPage from '../pages/DropdownPage';
import AccordionPage from '../pages/AccordionPage';
import ButtonPage from '../pages/ButtonPage';

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
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <SideBar />
      <div className='col-span-5'>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/button'>
          <ButtonPage />
        </Route>
      </div>
    </div>)
}

export default App;
