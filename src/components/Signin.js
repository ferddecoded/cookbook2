import React, { useContext } from 'react';
import styled from 'styled-components';

import firebase from './Firebase';
import { AppContext } from './Context';
import Button from './Button';
import CookingSvg from './Cooking';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 66.66%;
  margin: 20px auto;
  background: ${({ theme }) => theme.white};
  box-shadow: t${({ theme }) => theme.bs};
  border-radius: 25px;
  padding: 20px;
`;

const MessageContainer = styled.div`
  margin: 20px 0px;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledCookingSVG = styled(CookingSvg)`
  svg {
    width: 100%;
    height: 100%;
  }
`;

const StyledHiddenButton = styled(Button)`
  opacity: ${({ show }) => show ? '1' : '0'};
  height: 0;
  overflow: hidden;
  position: relative;
  top: -1000px;
`;

const StyledButton = styled(Button)`
  position: relative;
  top: -20px;
`;

const Signin = () => {
  const { setCurrentUser, currentUser } = useContext(AppContext);
  const logIn = () => {
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
    <Container>
      <ImageContainer>
        <StyledCookingSVG />
      </ImageContainer>
      <MessageContainer>
        <h3>Make sure to Sign In to save all of your favorite recipes and keep track of your checklists</h3>
      </MessageContainer>
      {/* For some reason this button needs to be here in order for login button to work on mobile */}
      <StyledHiddenButton onClick={logIn}>Sign In</StyledHiddenButton>
      <StyledButton onClick={currentUser ? logOut : logIn}>{currentUser ? 'Sign Out' : 'Sign In'}</StyledButton>
    </Container>
  );
};

export default Signin;
