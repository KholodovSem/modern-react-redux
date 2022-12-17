import axios from 'axios';

const BASE_URL = 'http://localhost:4000/books/'

export const fetchBooks = async () => {
  try {
    const { data } = await axios.get(BASE_URL);

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export const createBook = async (body) => {
  try {
    const { data } = await axios.post(BASE_URL, body);

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export const removeBookById = async (id) => {
  try {
    await axios.delete(`${BASE_URL}${id}`);
  } catch (error) {
    throw new Error(error);
  }
}

export const editBookById = async (id, body) => {
  try {
    const { data } = await axios.patch(`${BASE_URL}${id}`, body);

    return data;
  } catch (error) {
    throw new Error(error)
  }
} 