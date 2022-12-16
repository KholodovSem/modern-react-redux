import axios from 'axios';

const URL = 'https://api.unsplash.com/';
const ACCESS_KEY = 'Client-ID fakwiTdaVertS8yXFhqJXWrcSbYaiP8Eko2acai5uc0';

const searchImage = async (query) => {
  const { data } = await axios(
    {
      url: `${URL}search/photos/`,
      method: 'get',
      headers: {
        Authorization: ACCESS_KEY
      },
      params: {
        query: query
      }
    }
  );

  return data.results;
};

export default searchImage;