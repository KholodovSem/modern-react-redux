import { useState, useEffect } from 'react';

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count])

  const handleClick = () => {
    setCount((prevState) => prevState + 1)
  }

  return [count, handleClick]
};

export default useCounter;