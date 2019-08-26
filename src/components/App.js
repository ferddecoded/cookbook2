import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { AppProvider } from './Context';
import Nav from './Nav';
import Home from './Home';
import Signin from './Signin';
import Favorites from './Favorites';
import Favorite from './Favorite';

export const AppWrapper = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Arimo';
    background-color: ${props => props.theme.offWhite};
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, p, span {
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  primary: '#f0cb37',
  secondary: '#6736dd',
  accentSecondary: '#bb9eff',
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  white: 'white',
  lightgrey: '#E1E1E1',
  offWhite: '#f7f7f7',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const App = () => {
  const [loggedIn, setLoggedInState] = useState(false);
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Nav loggedIn={loggedIn} setLoggedInState={setLoggedInState} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/favorite/:id" component={Favorite} />
          </Switch>
          <GlobalStyle />
        </Router>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
