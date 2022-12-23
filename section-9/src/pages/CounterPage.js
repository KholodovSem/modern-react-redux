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

import useCounter from '../hooks/useCounter';
import Button from '../components/Button';

const CounterPage = ({ initialCount }) => {
  const [count, increment] = useCounter(initialCount)

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment} primary>
        Increment
      </Button>
    </div>)
};

export default CounterPage;