import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.section`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
`;

const Modal = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 80%;
  height: 30vh;
  transform: translateX(-50%);
  border-radius: 10px;
  background-color: white;
`;

const ModalHeader = styled.header`
  height: 50px;
  width: 100%;
  background-color: rgb(240, 203, 55);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;
  height: 100px;
  margin: 20px 0px 10px 0px;

  button {
    width: 100px;
  }
`;

const SignInModal = ({ redirectToSignIn }) => {
  return (
    <ModalWrapper>
      <Modal>
        <ModalHeader>OOPS ...</ModalHeader>
        <ModalBody>
          <span>You must be signed in first</span>
          <button onClick={redirectToSignIn}>Go To Sign In</button>
        </ModalBody>
      </Modal>
    </ModalWrapper>
  );
};

export default SignInModal;
