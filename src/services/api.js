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

//------GET REQUESTS------//
const getExamples = () => api('get', '/examples');

const getPool = (args) => api('get', '/pool', args);

//------POST REQUESTS------//

const newRule = (payload) => api('post', '/rule', {uid:'y4Ac7s3VPddxkAnUOo5HA977d7x4'}, payload);


export {
  getExamples,
  newRule,
  getPool,
};
