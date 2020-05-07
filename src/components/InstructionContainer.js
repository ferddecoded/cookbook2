import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px 0px;
  padding: 10px;
  background-color: ${({ theme }) => theme.opaqueGrey};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InstructionContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default InstructionContainer;