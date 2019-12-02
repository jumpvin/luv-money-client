import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerGetPool } from '../../ducks/getPool/getPoolActions';
import { triggerAddUser } from '../../ducks/addUser/addUserActions';
import { triggerAddPool } from '../../ducks/addPool/addPoolActions';
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
      if (user){
        //Once everything is set up uncoment dispatch below and delete current dispatch
        //dispatch(triggerGetPool({ uid: user.uid }));
        dispatch(triggerGetPool({ uid: 'y4Ac7s3VPddxkAnUOo5HA977d7x6' }))
      };
    }); 
  }, []);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if(user && user!.metadata!.lastSignInTime === user!.metadata!.creationTime && !pool) {
      //A pool will need to be created here as well. Otherwise It'll never login in
      dispatch(triggerAddUser({uid: user!.uid, name: user!.displayName, email: user!.email, photourl: user!.photoURL}));

      dispatch(triggerAddPool({
        admin_id: user!.uid, 
        name: 'New Pool',
        frequency:'Monthly',
        statement_date: '12-15-19 12:00:00',
        due_date: '12-15-19 12:00:00',
        grace_period: '5 days' 
        })
      );
      dispatch(triggerGetPool({ uid: user.uid }));
    };
  }, [pool])
  
{/* <Spinner className="spinner" /> */}
console.log(pool);

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
