import React, { useContext } from 'react';
import { AppContext } from './Context';
import Modal from './Modal';
import styled from 'styled-components';

import FavoriteItem from './FavoriteItem';
import Button from './Button';

const StyledButton = styled(Button)`
  margin: 40px 0px;
`;

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
            <StyledButton onClick={redirectToSignIn}>Sign In</StyledButton>
          </>
        )}
    />);
  }
  return userRecipes.map((recipe) => <FavoriteItem {...recipe} />);
};

export default Favorites;
