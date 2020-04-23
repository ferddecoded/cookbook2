import React, { useContext } from 'react';
import { AppContext } from './Context';
import Modal from './Modal';

import FavoriteItem from './FavoriteItem';
import Button from './Button';

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
    return (<Modal
        headerContent={<h2>OOPS ...</h2>}
        bodyContent={(
          <>
            <h3>You must be signed in first!</h3>
            <Button onClick={redirectToSignIn}>Go To Sign In</Button>
          </>
        )}
    />);
  }
  return userRecipes.map((recipe) => <FavoriteItem {...recipe} />);
};

export default Favorites;
