/* 
    *custom hooks (пользовательские хуки)

    Это возможность для нас вынести некую переиспользуемую логику в отдельный хук (просто функция).
    Чтобы потом у нас была возможность повторно её переиспользовать в других компонентах.

    Guide to create custom hook:

    1) Make a function called "useSomething"
       Хуки должны всегда начинаться с "use"

    2) Find all the non-JSX expression that refer to 1-2
       related pieces of state
    
    3) Cut them all out, paste them into "useSomething"

    4) Find "not defined" errors is your component

    5) In your hook, return an object or array that contains the 
       variables the components need
    
    6) In the component, call your hook. Destructure the properties
       the components need

    7) Find "not defined" variables in the hook. Pass the missing 
       variables in as arguments to the hook.

    8) Rename the hook to something more meaningful

    9) Rename returned properties to something more descriptive 
*/

/* 
      * useReducer hook
      Является альтернативой useState.
      Нужен для того чтобы делать динамические компоненты.

      Может быть полезен, когда у нас есть несколько кусочков 
      состояния тесно связанных между собой.

      Данный хук первым аргументом принимает аргумент (reducer): 
      функция - настройка, которая объясняет как работать с состоянием
      в том или ином случае.

      reducer = (state, action) => {}
      С помощью switch перебирем варианты.
      Всегда возвращает новый объект - state.
      Не забываем распылить предедущее состояние, только после этого
      вносим правки - при работе в свиче с экшенами.

      action - объект, который всегда содержит свойство "type" -
      оно описывает что мы хотим сделать, 
      и не всегда содержит "payload" - полезная нагрузка

      Вторым аргументом принимает начальное состояние.

      Возращает массив, первым значением которого является - state (состояние).
      Вторым значением функция, которая доставляет action до редюсера (dispatch).

      !Immer 
      Библиотека, которая уже встроена в Redux Toolkit.
      Позволяет изменять состояние в редюсере напрямую (мутируя), без 
      предварительного расспыления.
      Она все делает под капотом.
*/

import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const ADD_VALUE_TO_COUNT = "add-value-to-count";
const CHANGE_VALUE_TO_ADD = "change-value";

const reducer = (state, { type, payload }) => {
   switch (type) {
      case INCREMENT_COUNT: {
         return {
            ...state,
            count: state.count + 1
         }
      }

      case DECREMENT_COUNT: {
         return {
            ...state,
            count: state.count - 1
         }
      }

      case ADD_VALUE_TO_COUNT: {
         return {
            ...state,
            count: state.count + state.valueToAdd,
            valueToAdd: 0
         }
      }

      case CHANGE_VALUE_TO_ADD: {
         return {
            ...state,
            valueToAdd: payload
         }
      }

      default:
         return state;
   }
}

const CounterPage = ({ initialCount }) => {
   const [state, dispatch] = useReducer(reducer, {
      count: initialCount,
      valueToAdd: 0
   })

   const onIncrement = () => {
      dispatch({ type: INCREMENT_COUNT })
   }

   const onDecrement = () => {
      dispatch({ type: DECREMENT_COUNT })
   }

   const handleChange = (e) => {
      const value = parseFloat(e.currentTarget.value) || 0;

      dispatch({ type: CHANGE_VALUE_TO_ADD, payload: value })
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch({ type: ADD_VALUE_TO_COUNT })
   }

   return (
      <Panel className="m-3">
         <h1 className='text-lg'>Count is {state.count}</h1>
         <div className='flex flex-row'>
            <Button onClick={onIncrement} primary>
               Increment
            </Button>
            <Button onClick={onDecrement} primary>
               Decrement
            </Button>
         </div>

         <form>
            <label>Add a lot!</label>
            <input
               className='p-1 m-3 bg-gray-50 border border-gray-300'
               type={"number"}
               value={state.valueToAdd || ""}
               onChange={handleChange}
            />
            <Button primary onClick={handleSubmit}>Add it!</Button>
         </form>
      </Panel>)
};

export default CounterPage;