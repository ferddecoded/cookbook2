import React, { useContext } from 'react';
import { AppContext } from './Context';
import Modal from './Modal';
import styled from 'styled-components';

import FavoriteItem from './FavoriteItem';
import Button from './Button';
import InstructionContainer from './InstructionContainer';
import { AppWrapper } from './App';

const StyledButton = styled(Button)`
  margin: 40px 0px;
`;

const Favorites = ({ history }) => {
  const { currentUser, userRecipes } = useContext(AppContext);

  const redirectToSignIn = () => {
    history.push('/signin');
  };

  if (!currentUser) {
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
  return <AppWrapper>
    <InstructionContainer>
      <p>Below are your favorited recipes</p>
    </InstructionContainer>
    {userRecipes.map((recipe) => <FavoriteItem {...recipe} />)}
  </AppWrapper>;
};

export default Favorites;
