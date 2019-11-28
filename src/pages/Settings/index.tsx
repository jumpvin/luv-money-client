import React from 'react';
import Header from '../../molecules/Header';
import firebase from 'firebase';
import { ReactComponent as Default_user_img } from '../../assests/images/default_user.svg';
import './style.css';

const Settings = () => {
  let user = firebase.auth().currentUser;
  const url: string = user!.photoURL || '';

  const handleSignOut = async () => {
    await firebase.auth().signOut()
  }

    return (
      < div >
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
