const firstName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const userPhotoUrl = (id, userInfo) => {
  for (let i = 0; i < userInfo.length; i += 1) {
    if (userInfo[i].id === id) {
      return userInfo[i].photourl;
    }
  }
  return 'User does not exist';
};

export {
  firstName,
  userPhotoUrl,
};
