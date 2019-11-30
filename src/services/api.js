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

const getPool = (args) => api('get', '/pool', args);

const statementFetch = (args) => api('get', '/statement', args);

// ------POST REQUESTS------//

const newRule = (payload) => api('post', '/rule', { uid: 'y4Ac7s3VPddxkAnUOo5HA977d7x4' }, payload);

const sendInvite = async (args) => {
  const res = await axios.get('https://us-central1-sendinvite-b6bba.cloudfunctions.net/sendMail', { params: args });
  return res.data;
};

export {
  getExamples,
  statementFetch,
  newRule,
  getPool,
  sendInvite,
};
