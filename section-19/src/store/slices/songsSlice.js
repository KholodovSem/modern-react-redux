/* 
    createSlice - функция, которая позволяет создать слайс.
    Она сразу объеденяет в себе, начальное состояние кусочка стейта, 
    экшены, работу с асинхронными экшенами, если они необходимы.
*/

import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions/actions";

const songsSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    addSong: (state, { payload }) => {
      state.push(payload)
    },
    removeSong: (state, { payload }) => {
      return state.filter(song => song !== payload)
    },
    // removeAllSongs: () => {
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
    builder.addCase(reset, () => {
      return [];
    }) //* Best way
  }
})

export const { addSong, removeSong } = songsSlice.actions;
export default songsSlice.reducer;