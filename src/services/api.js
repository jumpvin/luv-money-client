import axios from 'axios';

const api = async (type, url, args, headers) => {
  const res = await axios[type](`http://localhost:3001${url}`, args, headers);
  return res.data;
};

const getExamples = () => api('get', '/examples');

const setExamples = () => api('post', '/example');

const getPool = (args, headers) => api('get', '/pool', args, headers);

const getUsers = (args) => api('get', '/users', args);

export {
  getExamples,
  setExamples,
  getPool,
};
