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
  z-index: 999;
`;

const ModalContainer = styled.div`
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

  h2 {
    font-family: 'Pacifico';
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-content: center;
  height: 150px;
  margin: 20px 0px 10px 0px;
  text-align: center;

  button {
    width: 100px;
    margin: 0 auto;
  }
`;

const Modal = ({ headerContent, bodyContent }) => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalHeader>
          {headerContent}
        </ModalHeader>
        <ModalBody>
          {bodyContent}
        </ModalBody>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
