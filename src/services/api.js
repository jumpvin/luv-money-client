import axios from 'axios';
import { token, user } from './auth';

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

const getUser = async () => api('get', '/user', { uid: await user() });

const getPool = (args) => api('get', '/pool', args);

const getOnePool = (args) => api('get', '/one-pool', args);

const getBE = async () => api('get', '/poolBE', { uid: await user() });

const popUpFetch = (args) => api('get', '/popup', args);

// ------POST REQUESTS------//

const newRule = async (payload) => api('post', '/rule', { pool_id: await user() }, payload);

const editRule = async (payload) => api('put', '/rule', { pool_id: await user() }, payload);

const newExpense = async (payload) => api('post', '/expense', { pool_id: await user() }, payload);


const sendInvite = async (args) => {
  const res = await axios.get('https://us-central1-sendinvite-b6bba.cloudfunctions.net/sendMail', { params: args });
  return res.data;
};

const postUser = (payload) => api('post', '/auth/signup', '', payload);

const newMessage = (payload) => {
  console.log(payload);
  return api('post', '/messages', { pool_id: await user() }, payload);
};
const newPayment = async (payload) => {
  console.log(payload);
  return api('post', '/payment', { pool_id: await user() }, payload);
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
  newMessage,
};
