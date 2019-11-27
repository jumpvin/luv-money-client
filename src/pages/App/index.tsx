import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import SignIn from '../SignIn/index'
import Main from '../../organisms/Main';
import { getPool } from '../../services/api';
import { ReactComponent as Spinner } from '../../assests/svg-loaders/hearts.svg';

const getUser = async () => {
  const token = await firebase.auth().currentUser!.getIdToken();
  const res = await getPool({
    params: { user_id: 2 }, headers: {
      authToken: `Bearer ${token}`
    }});
  console.log(res);
  return res;
}


const App = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);


  useEffect(() => {
      setLoading(true)
    firebase.auth().onAuthStateChanged((user) => {
      setLoading(false)
      console.log(user);
      if (user) {
        getUser();
        return setUser(user)
      } else {
        return setUser({})
      }
    });
    
  },[]);

 
    

{/* <Spinner className="spinner" /> */}

  return (
    // {loading ? <Spinner className="spinner" />}
    <div className="app">
      {/* {loading ? <Spinner className="spinner"/> : */}
        {Object.keys(user).length > 0
            ? <Main /> : <SignIn />}
      /
    </div>
  );
};


export default App;

