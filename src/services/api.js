import axios from 'axios';
import token from './auth';

const api = async (type, url, args) => {
  const userToken = await token();
  const res = await axios[type](`http://localhost:3001${url}`, {
    params: args,
    headers: {
      authToken: `Bearer ${userToken}`,
    },
  });
  return res.data;
};

const getExamples = () => api('get', '/examples');

const setExamples = () => api('post', '/example');

const getPool = (args) => api('get', '/pool', args);

export {
  getExamples,
  setExamples,
  getPool,
};
