import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerGetPool, addRule } from '../../ducks/getPool/getPoolActions';
import { triggerAddUser } from '../../ducks/addUser/addUserActions';
import { triggerAddPool } from '../../ducks/addPool/addPoolActions';
import './App.css';
import firebase from 'firebase';
import SignIn from '../SignIn/index'
import Main from '../../organisms/Main';
import { ReactComponent as Spinner } from '../../assests/svg-loaders/hearts.svg';
import { async } from 'q';

const App = () => {
  const dispatch = useDispatch();
  const pool = useSelector(state => state.getPool.pool);
  const [loading, setLoading] = useState(true);
  const [splash, setSplash] = useState(true);

  setTimeout(() => setSplash(false)
    , 1250);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoading(false);
        dispatch(triggerGetPool({ uid: user.uid }));
      } else {
        setLoading(false)
      };
    });
  }, []);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    console.log(user);
    console.log(pool);
    if(user && user!.metadata!.lastSignInTime === user!.metadata!.creationTime && !pool) {
      createUserAndPool(user);
    };
  }, [pool])

  const createUserAndPool = async(user) => {
    await dispatch(triggerAddUser({uid: user!.uid, name: user!.displayName, email: user!.email, photourl: user!.photoURL||'https://picsum.photos/200'}));
      await dispatch(triggerAddPool({
        admin_id: user!.uid,
        name: 'New Pool',
        frequency: 'Monthly',
        current_statement: 1,
        next_statement_date: '12-15-19 12:00:00',
        due_date: '12-15-19 12:00:00',
        grace_period: '5 days'
      })
      );
      await dispatch(triggerGetPool({ uid: user.uid }));
  }

  return (
  <div>
    {
      splash
        ? <div className = 'splashscreen'>< img src = { require('../../assests/images/profile.png') } className = "splash" alt = 'splash' ></img ></div >
         : <div className="app">
            {loading ? <Spinner className="spinner" /> :
              Object.keys(pool).length > 0 && firebase.auth().currentUser && !loading
                ? <Main /> : firebase.auth().currentUser && !Object.keys(pool).length ? <Spinner className="spinner" /> : <SignIn />
            }
          </div>
      }
      </div>
          );
      };
      
      
      export default App;
