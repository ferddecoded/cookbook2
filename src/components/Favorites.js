import React, { useContext } from 'react';
import { AppContext } from './Context';
import SignInModal from './SignInModal';

import FavoriteItem from './FavoriteItem';

const Favorites = ({ history }) => {
  const { currentUser } = useContext(AppContext);

  const redirectToSignIn = () => {
    history.push('/signin');
  };

  const delayRedirectToSignIn = () => {
    setTimeout(() => {
      redirectToSignIn();
    }, 3000);
  };

  if (!currentUser) {
    delayRedirectToSignIn();
    return <SignInModal redirectToSignIn={redirectToSignIn} />;
  }
  return <FavoriteItem />;
};

export default Favorites;
