const USER_TOKEN = 'USER_TOKEN';

const userToken = (token) => ({
  type: USER_TOKEN,
  token,
});

export {
  USER_TOKEN,
  userToken,
};
