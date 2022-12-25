import { configureStore } from '@reduxjs/toolkit';
import carReducer, { changeTerm, removeCar } from './slices/CarSlice';
import formReducer, { changeName, changePrice } from './slices/FormSlice';
import { addCar } from './actions/actions';

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carReducer
  }
});

export {
  store,
  changeName,
  changePrice,
  addCar,
  changeTerm,
  removeCar
};