import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerGetPool } from '../../ducks/getPool/getPoolActions';
import './App.css';
import firebase from 'firebase';
import SignIn from '../SignIn/index'
import Main from '../../organisms/Main';
import { getPool } from '../../services/api';
import { ReactComponent as Spinner } from '../../assests/svg-loaders/hearts.svg';

const App = () => {
  const dispatch = useDispatch();
  const pool = useSelector(state => state.getPool.pool);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
<<<<<<< HEAD
      if (user) dispatch(triggerGetPool({ user_id: 2 }));
    });  
=======
      setLoading(false)
      console.log(user);
      if (user) {
        getUser();
        setUser(user)
      } else {
        setUser({})
      }
    });
    
>>>>>>> 439055a93af8b0431ca58578d96bd79c1ceb35b4
  },[]);

{/* <Spinner className="spinner" /> */}
  return (
    // {loading ? <Spinner className="spinner" />}
    <div className="app">
      {/* {loading ? <Spinner className="spinner"/> : */}
        {Object.keys(pool).length > 0
            ? <Main /> : <SignIn />}
<<<<<<< HEAD
=======
      
>>>>>>> 439055a93af8b0431ca58578d96bd79c1ceb35b4
    </div>
  );
};


export default App;
