import React, { useContext } from 'react';

import firebase from './Firebase';
import { AppContext } from './Context';

const Signin = () => {
  const { setCurrentUser, currentUser } = useContext(AppContext);
  const logIn = () => {
    console.log('logging in');
    const provider = new firebase.auth.GoogleAuthProvider();
    //prompts user to select their acconut
    provider.setCustomParameters({
      prompt: 'select_account',
    });

    //in this pop up, we are passing the provider
    //the pop up will accept a promise
    //go into authentication on firebase, and enable the provider you plan on using
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((user) => setCurrentUser(user))
      .catch(err => console.error(Error(err)));
  };

  const logOut = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      {currentUser ? <button onClick={logOut}>Sign Out</button> : <button onClick={logIn}>Sign In</button>}
    </div>
  );
};

export default Signin;
