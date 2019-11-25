import axios from 'axios';

const api = async (type, url, args) => {
  const res = await axios[type](`http://localhost:3005${url}`, args);
  return res.data;
};

const getExamples = () => api('get', '/examples');

const setExamples = () => api('post', '/example');

export {
  getExamples,
  setExamples,
};
