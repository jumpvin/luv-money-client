import axios from 'axios';
import token from './auth';

const api = async (type, url, args, payload) => {
  const userToken = await token();
  const res = await axios[type](`http://localhost:3001${url}`, {
    payload,
    params: args,
    headers: {
      authToken: `Bearer ${userToken}`,
    },
  });
  return res.data;
};

// ------GET REQUESTS------//
const getExamples = () => api('get', '/examples');

const getUser = (args) => api('get', '/user', args);

const getPool = (args) => api('get', '/pool', args);

const getOnePool = (args) => api('get', '/one-pool', args);

const getBE = (args) => api('get', '/poolBE', args);

const popUpFetch = (args) => api('get', '/popup', args);

// ------POST REQUESTS------//

const newRule = (payload) => api('post', '/rule', { pool_id: 'y4Ac7s3VPddxkAnUOo5HA977d7x4' }, payload);

const editRule = (payload) => api('put', '/rule', { pool_id: 'y4Ac7s3VPddxkAnUOo5HA977d7x4' }, payload);

const newExpense = (payload) => api('post', '/expense', { pool_id: 'y4Ac7s3VPddxkAnUOo5HA977d7x4' }, payload);


const sendInvite = async (args) => {
  const res = await axios.get('https://us-central1-sendinvite-b6bba.cloudfunctions.net/sendMail', { params: args });
  return res.data;
};

const postUser = (payload) => api('post', '/auth/signup', '', payload);

const newPayment = (payload) => {
  console.log(payload);
  return api('post', '/payment', { pool_id: 'y4Ac7s3VPddxkAnUOo5HA977d7x4' }, payload);
};

const postPool = (payload) => api('post', '/pool', '', payload);
const postUserPool = (payload) => api('post', '/user-pool', '', payload);

export {
  getExamples,
  popUpFetch,
  getBE,
  newRule,
  getUser,
  editRule,
  getPool,
  getOnePool,
  postPool,
  newExpense,
  sendInvite,
  postUser,
  postUserPool,
  newPayment,
};
