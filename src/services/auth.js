'use strict';

const axios = require('axios');
const {auth} = require('./firebase-service');


exports.createUserAccount = (data) => {
  return axios.post('http://localhost:3001/auth/signup', data)
    .then(res => res.data)
}

exports.loginUser = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
}

exports.getSomething = () => {
  const token = await auth.currentUser.getIdToken();

  return axios.get('http://localhost:3001/pool', {headers:  
    { authorization: `Bearer ${token}` }})
    .then(res => res.data);
}

