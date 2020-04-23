import React, { useContext } from 'react';
import { AppContext } from './Context';
import SignInModal from './Modal';

import FavoriteItem from './FavoriteItem';

const Favorites = ({ history }) => {
  const { currentUser, userRecipes } = useContext(AppContext);

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
    return (<SignInModal
        redirectToSignIn={redirectToSignIn}
        headerContent={<h2>OOPS ...</h2>}
        bodyContent={(
          <>
            <span>You must be signed in first</span>
            <button onClick={redirectToSignIn}>Go To Sign In</button>
          </>
        )}
    />);
  }
  return userRecipes.map((recipe) => <FavoriteItem {...recipe} />);
};

export default Favorites;
