import { createSlice } from "@reduxjs/toolkit";
import { fethUsers, addUser, removeUserById } from "../asyncThunks/users";

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  /* 
    Мы работаем с асинхронными запросами.
    В этом случае нам необходимо использовать "extraReducers"
  */
  extraReducers: (builder) => {
    builder.addCase(fethUsers.fulfilled, (_, { payload }) => {
      return payload;
    });
    builder.addCase(addUser.fulfilled, (state, { payload }) => {
      state.push(payload);
    });
    builder.addCase(removeUserById.fulfilled, (state, { payload }) => {
      return state.filter(user => user.id !== payload.id);
    });
  }
});

export default usersSlice.reducer;