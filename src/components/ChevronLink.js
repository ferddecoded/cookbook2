import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledChevronLink = styled(NavLink)`
  span {
    transition: all .4s;
    left: 4px;
  }
  &:hover {
    span {
      left: 8px;
    }
  }
`;

const Chevron = styled.span`
  position: relative;
`;

const ChevronLink = ({ children, ...props }) => {
  return (
    <StyledChevronLink {...props}>
      {children}
      <Chevron>></Chevron>
    </StyledChevronLink>
  );
};

export default ChevronLink;