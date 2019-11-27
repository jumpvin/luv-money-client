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

const oweMock = [
  {
    path: 'https://avatars3.githubusercontent.com/u/31024648?s=460&v=4',
    who: 'James',
    amount: 5,
    what: 'Netflix',
  },
  {
    path: 'https://avatars3.githubusercontent.com/u/47696364?s=460&v=4',
    who: 'Briana',
    amount: -11,
    what: 'Food',
  },
];

const getExamples = () => api('get', '/examples');

const setExamples = () => api('post', '/example');

const getOweCards = () => oweMock;

const getPool = (args) => api('get', '/pool', args);

const getUsers = (args) => api('get', '/users', args);

export {
  getExamples,
  setExamples,
  getOweCards,
  getPool,
};
