import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from "@faker-js/faker";

/* 
    *RTK Query
    Ещё одна возможность работать с асинхронными запросами в RTK, помимо AsynkThunk.

    Для работы, нам понадобиться импортировать createApi, fetchBaseQuery из @reduxjs/toolkit/query/react.
    !Путь отличается от того, которым мы пользовались для импорта других функций из RTK.

    fetchBaseQuery - это модуль встроенный в нативный JS (fetch), который позволяет делать запросы на сервер.
    Он на нужен для того, чтобы определить глобальные запросы к какому-то адресу.
    Так, мы можем настроить базовый url - по которому мы будем обращаться, в нашем случае - это 
    http://localhost:4000
    Там же могут быть заголовки и другие параметры, если они нужны.

    createApi - это функция, которая за нас создаёт слайс и настраивает экшены.
    Очень масштабная по своим размерам, много чего умеет.
    Первое свойство, которое необходимо определить "reducerPath" - это то, как будет называться
    редюсер созданный этой функцией в нашем хранилище.
    !Это же название мы укажем, когда будем его подключать в store, функция будет искать совпадение по имени.
    baseQuery - второй параметр, мы его настроили.
    Далее идет метод "endpoints" принимает в качетсве аргумента "builder".
    Благодаря ему, мы создаём эндпоинты, с помощью которых мы можем взаимодействовать с адресом.
    !Мы создаём один RTK Query для связаной группы запросов (Albums, Photos, Users).
    В нашем случае, мы работаем с альбомами и нам нужно три эндпоинта:

    GET Albums user - Query
    POST Album for user - Mutation
    DELETE Album for user - Mutation

    Query - мы используем когда хотим получить и прочитать данные.
    Mutation - когда мы хотим как-либо изменить данные.
*/

/* 
    * RTK Query Tag System
    Используется для синхронизации запросов.
*/

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000"
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        /* 
          ProvidesTags - можем быть как просто массив со строками.
          Либо как функция, в качестве аргументов она получает три параметра:
          1 - results
          2 - error
          3 - additional argument (in our case it's user)
          Мы используем как метод, так как нам необходимо динамически вычеслить
          "id".
          Чтобы избавиться от дублирования запросов.
        */
        providesTags: (result, error, user) => {
          return [{ type: 'Album', id: user.id }]
        },
        query: (user) => {
          return {
            url: '/albums',
            params: {
              userId: user.id
            },
            method: "GET"
          }
        }
      }),

      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: 'Album', id: user.id }]
        },
        query: (user) => {
          return {
            url: '/albums',
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName()
            }
          }
        }
      }),

      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: 'Album', id: album.userId }]
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE"
          }
        }
      })
    }
  }
})

/* 
    После настройки RTK Query - функция автоматически сгенерирует для нас хуки.
    Которые мы экспортируем.

    !Не забыть подключить RTQ Query в store
*/

export { albumsApi };
export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;