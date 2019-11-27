
import firebase from 'firebase';

const token = async () => firebase.auth().currentUser.getIdToken();

export default token;
