import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled('div')`
  margin: 20px 0px;
  padding: 20px;
  width: 100%;
  color: black;
  background-color: ${({ theme }) => theme.lightgrey};
  border-radius: 10px;
  text-align: center;

`;

export default ({ message }) => {
  return(
    <MessageContainer>
      {message}
    </MessageContainer>
  );
};