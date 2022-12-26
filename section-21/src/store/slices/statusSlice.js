import { createSlice } from '@reduxjs/toolkit';
import { fethUsers, removeUserById, addUser } from '../asyncThunks/users';

const statusSlice = createSlice({
  name: 'status',
  initialState: {
    loading: false,
    error: null
  },
  /*
    Мы работаем с асинхронными запросами.
    В этом случае нам необходимо использовать "extraReducers"
  */
  extraReducers: (builder) => {
    //* Users
    builder.addCase(fethUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fethUsers.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fethUsers.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload.message;
    });

    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addUser.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(addUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload.message;
    });

    builder.addCase(removeUserById.pending, (state => {
      state.loading = true;
      state.error = null;
    }))
    builder.addCase(removeUserById.fulfilled, (state => {
      state.loading = false;
      state.error = null;
    }))
    builder.addCase(removeUserById.rejected, ((state, { payload }) => {
      state.loading = false;
      state.error = payload.message;
    }))

    //* Albums

    //* Photos
  }
});

export default statusSlice.reducer;