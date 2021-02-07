import firebase from 'firebase';

const token = async () => firebase.auth().currentUser.getIdToken();
const user = async () => firebase.auth().currentUser.uid;

export {
  token,
  user
};
