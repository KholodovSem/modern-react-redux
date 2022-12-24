/* 
    createSlice - функция, которая позволяет создать слайс.
    Она сразу объеденяет в себе, начальное состояние кусочка стейта, 
    экшены, работу с асинхронными экшенами, если они необходимы.
*/

import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions/actions";

const movieSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie: (state, { payload }) => {
      state.push(payload)
    },
    removeMovie: (state, { payload }) => {
      return state.filter(movie => movie !== payload)
    },
    // removeAllMovies: () => {
    //   //Используя Immer, обязательно нужно мутировать State что-бы он понял, что вы хотите сделать
    //   return [];
    // } //! One way
  },
  /* 
      Каждый раз отправляя экшен через функцию "dispatch" она попадает в каждый редюсер состояния.
      С помощью экстраредюсера мы можем настроить допоплнительное поведение, которое будет зависить
      от какого-либо экшена (например из другого редюсера).
  */
  extraReducers: (builder) => {
    // builder.addCase(songsSlice.actions.removeAllSongs, () => {
    //   return [];
    // }); //! Second way

    builder.addCase(reset, () => {
      return [];
    }) //* Best way
  }
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;