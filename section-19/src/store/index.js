/* 
    Redux - state manager
    Позволяет хранить одно общее состояние для всего приложения и 
    избавиться от прокидывания пропсов, что делает код значительно чище.

    Redux Toolkit (RTK) - обёртка над Redux, которая значительно упрощает
    взаимодейсвтие с Redux уберая много бойлеркода.
*/

import { configureStore } from '@reduxjs/toolkit';
import moviesReducer, { addMovie, removeMovie } from './slices/moviesSlice';
import songsReducer, { addSong, removeSong } from './slices/songsSlice';
import { reset } from './actions/actions';

// configureStore принимает один аргумент, объект настроек, среди которых редюсер, мидлвары и т.д.
export const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  },
});

export { addSong, removeSong, addMovie, removeMovie, reset };


