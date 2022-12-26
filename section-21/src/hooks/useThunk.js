import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useThunk = (thunkFn) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setloadingError] = useState(null);
  const dispatch = useDispatch();
  const updatedThunkFn = useCallback((arg) => {
    setIsLoading(true);
    dispatch(thunkFn(arg))
      .unwrap()
      .catch((error) => setloadingError(error))
      .finally(() => setIsLoading(false))
  }, [thunkFn, dispatch])

  return [isLoading, loadingError, updatedThunkFn];
};

export default useThunk;