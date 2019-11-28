import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerGetPool } from '../../ducks/getPool/getPoolActions';
import './App.css';
import firebase from 'firebase';
import SignIn from '../SignIn/index'
import Main from '../../organisms/Main';
import { ReactComponent as Spinner } from '../../assests/svg-loaders/hearts.svg';

const App = () => {
  const dispatch = useDispatch();
  const pool = useSelector(state => state.getPool.pool);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) dispatch(triggerGetPool({ uid: 'y4Ac7s3VPddxkAnUOo5HA977d7x6' }));
    });  
  }, []);
  
{/* <Spinner className="spinner" /> */}
  return (
    // {loading ? <Spinner className="spinner" />}
    <div className="app">
      {/* {loading ? <Spinner className="spinner"/> : */}
        {Object.keys(pool).length > 0
            ? <Main /> : <SignIn />}
    </div>
  );
};


export default App;
