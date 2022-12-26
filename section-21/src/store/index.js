import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import statusReducer from './slices/statusSlice';

const store = configureStore({
  reducer: {
    status: statusReducer,
    users: usersReducer
  }
});

export * from './asyncThunks/users';
export { store };