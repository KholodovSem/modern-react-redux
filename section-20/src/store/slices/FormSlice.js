import { createSlice } from '@reduxjs/toolkit';
import { addCar } from '../actions/actions';

const FormSlice = createSlice({
  name: "form",
  initialState: {
    name: '',
    price: ''
  },
  reducers: {
    changeName: (state, { payload }) => {
      state.name = payload;
    },
    changePrice: (state, { payload }) => {
      state.price = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addCar, (state) => {
      state.name = '';
      state.price = '';
    })
  }
});

export const { changeName, changePrice } = FormSlice.actions;
export default FormSlice.reducer;