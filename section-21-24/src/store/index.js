import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import usersReducer from './slices/usersSlice';
import statusReducer from './slices/statusSlice';
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';

const store = configureStore({
  reducer: {
    status: statusReducer,
    users: usersReducer,
    /* Сюда подставится значение переменной reducerPath */
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer
  },
  /* Для корректной работы RTK Query */
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware).concat(photosApi.middleware)
  }
});

/* Для кэширования */
setupListeners(store.dispatch)

export * from './asyncThunks/users';
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from './apis/photosApi';
export { store };