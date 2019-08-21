import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;

  h2 {
    padding: 0;
    margin: 0;
  }
`;

const NavLinks = styled.ul`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 33.33%);
  padding: 0;
  margin: 0;
  list-style: none;
  width: 300px;
  li {
    color: black;
    text-align: right;
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <h2>Logo</h2>
      <NavLinks>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/favorites">
          <li>Favorites</li>
        </Link>
        <Link to="/signin">
          <li>Login</li>
        </Link>
      </NavLinks>
    </NavBar>
  );
};

export default Nav;
