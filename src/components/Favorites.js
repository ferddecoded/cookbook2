import React, { useContext } from 'react';
import { AuthContext } from './Auth';
import SignInModal from './SignInModal';

const Favorites = ({ history }) => {
  const { currentUser } = useContext(AuthContext);

  const redirectToSignIn = () => {
    history.push('/signin');
  };

  const delayReirectToSignIn = () => {
    setTimeout(() => {
      redirectToSignIn();
    }, 3000);
  };

  if (!currentUser) {
    delayReirectToSignIn();
    return <SignInModal redirectToSignIn={redirectToSignIn} />;
  }
  return <div>Favorites</div>;
};

export default Favorites;
