import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { faker } from '@faker-js/faker';

/* 
    * AsyncThunk
    Миддлвара, которая позволяет работать с асинхронными запросами в RTK.
    Каждый раз, делая запрос куда-то.
    Санк, автоматически отправляет экшены во все редюсеры.
    Всего может быть три типа экшенов:
    - Pending (Ожидаем ответ)
    - Fullfiled (Успешный запрос)
    - Rejected (Неуспешный запрос)
*/

const URL = 'http://localhost:4000/users';

export const fethUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addUser = createAsyncThunk("users/addUser", async (_, { rejectWithValue }) => {
  try {
    const user = {
      name: faker.name.fullName(),
    }

    const { data } = await axios.post(URL, user);

    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const removeUserById = createAsyncThunk('users/removeUserById', async (user, { rejectWithValue }) => {
  try {
    await axios.delete(`${URL}/${user.id}`);

    return user;
  } catch (error) {
    return rejectWithValue(error);
  }
})