import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const BodyScrollPreventer = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  margin: 0;
  background-color: #f0cb37;
  position: relative;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  h2 {
    padding: 0;
    margin: 0;
    margin-left: 10px;
    font-family: 'Pacifico', cursive;
    color: ${props => props.theme.black};
    text-shadow: 6px 6px 0px rgba(103, 54, 221, 0.4);
  }

  ul {
    display: grid;
    justify-content: space-around;
    align-items: center;
    grid-template-columns: repeat(3, 33.33%);
    padding: 0;
    margin-left: auto;
    list-style: none;
    width: 50%;
    li {
      text-align: center;
      a {
        color: ${props => props.theme.black};
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    .line {
      width: 30px;
      height: 3px;
      background: black;
      margin: 5px;
    }

    .hamburger {
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 50%;
      transform: translate(-5%, -50%);
      z-index: 99;
      display: none;

      @media(max-width: 768px) {
        display: block;
      }
    }

    ul {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${props => props.theme.primary};
      height: 100vh;
      width: 100%;
      flex-direction: column;
      display: flex;
      z-index: 99;
      clip-path: circle(100px at 90% -10%);
      -webkit-clip-path: circle(100px at 90% -10%);
      transition: all 1s ease-out;
    }

    .open {
      clip-path: circle(1100px at 90% -10%);
      -webkit-clip-path: circle(1100px at 90% -10%);
    }

    ul li {
      opacity: 0;
    }

    ul li a {
      font-size: 25px;
    }

    ul li:nth-child(1) {
      transition: all 0.5s ease 0.2s;
    }
    ul li:nth-child(2) {
      transition: all 0.5s ease 0.4s;
    }
    ul li:nth-child(3) {
      transition: all 0.5s ease 0.6s;
    }

    li.fade {
      opacity: 1;
    }
  }
`;

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <NavBar>
      <h2>Search, Shop, Dine</h2>
      <ul className={navOpen ? 'open' : ''}>
        <li className={navOpen ? 'fade' : ''}>
          <Link to="/" onClick={() => setNavOpen(false)}>
            Home
          </Link>
        </li>

        <li className={navOpen ? 'fade' : ''}>
          <Link to="/favorites" onClick={() => setNavOpen(false)}>
            Favorites
          </Link>
        </li>

        <li className={navOpen ? 'fade' : ''}>
          <Link to="/signin" onClick={() => setNavOpen(false)}>
            Account
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
        {navOpen && <BodyScrollPreventer />}
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </NavBar>
  );
};

export default Nav;
