import React from 'react';
import Header from '../../molecules/Header';
import firebase from 'firebase';
import { ReactComponent as Default_user_img } from '../../assests/images/default_user.svg';
import './style.css';
import {useDispatch,useSelector} from 'react-redux';
import { getPoolSuccess } from '../../ducks/getPool/getPoolActions';

const Settings = () => {

  const pool = useSelector(state => state.getPool.pool.userInfo[0]);
  const url = pool.photourl;

  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await dispatch(getPoolSuccess({}))
    await firebase.auth().signOut()
  }

    return (
      <div className='hold-column'>
      <Header>
        <h1>Settings</h1>
      </Header>
        <div className='user-img'>
          <img src={url}/>
          {/* <Default_user_img/> */}
        </div>
        <button type='button' className='sign-out' onClick = {handleSignOut}>Sign-Out</button>
    </div>
  )
};

export default Settings;
