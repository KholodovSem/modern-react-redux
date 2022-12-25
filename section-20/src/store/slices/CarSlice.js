import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { addCar } from '../actions/actions';

const CarSlice = createSlice({
  name: 'cars',
  initialState:
  {
    searchTerm: '',
    cars: []
  },
  reducers: {
    changeTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },

    removeCar: (state, { payload }) => {
      state.cars = state.cars.filter(car => car.id !== payload);
    }
  },

  extraReducers: (builder) => {
    builder.addCase(addCar, (state, { payload }) => {
      state.cars.push({
        name: payload.name,
        price: payload.price,
        id: nanoid()
      });
    })
  }
});

export const { removeCar, changeTerm } = CarSlice.actions;
export default CarSlice.reducer;