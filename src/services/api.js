import axios from 'axios';

const api = async (type, url, args) => {
  const res = await axios[type](`http://localhost:3005${url}`, args);
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

export {
  getExamples,
  setExamples,
  getOweCards,
};
