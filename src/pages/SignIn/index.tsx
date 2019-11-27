import React from 'react';
import './style.css';
import firebase from 'firebase';
import { ReactComponent as Logo } from '../../assests/images/default.svg';
import config from '../../firebaseConfig';

firebase.initializeApp(config);

const firebaseui = require('firebaseui');

const ui = new firebaseui.auth.AuthUI(firebase.auth());


// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   ],
//   // Other config options...
// });

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult(authResult, redirectUrl) {


      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader')!.style.display = 'none';
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
};

ui.start('#firebaseui-auth-container', uiConfig);

const SignIn = () => (
  <div className="signup">
    <Logo className="logo" />
    <h2>Login</h2>
    <div id="firebaseui-auth-container" />
    <div id="loader">Loading...</div>
  </div>
);

export default SignIn;
