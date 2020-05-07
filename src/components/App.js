import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { AppProvider } from './Context';
import Nav from './Nav';
import Home from './Home';
import Signin from './Signin';
import Favorites from './Favorites';
import RecipeItem from './RecipeItem';
import Footer from './Footer';

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
    box-sizing: border-box;
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

const bs = {
  bsSm: '0 1px 4px 0 rgba(0, 0, 0, .1)',
  bsMd: '0 2px 6px 0 rgba(0, 0, 0, 0.2)',
  bsLg: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const theme = {
  primary: '#f0cb37',
  secondary: '#6736dd',
  accentSecondary: '#bb9eff',
  red: '#ff0002',
  black: '#393939',
  grey: '#3A3A3A',
  white: 'white',
  lightgrey: '#E1E1E1',
  offWhite: '#f7f7f7',
  maxWidth: '1000px',
  opaquePrimary: 'rgb(102,53,218, .7)',
  opaqueGrey: 'rgba(236, 236, 236, .6)',
  label: {
    fontSize: '12px',
  },
  link: {
    fontSize: '14px',
    fontWeight: 700,
  },
  ...bs,
};

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Nav />
          <Switch>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/recipeItem" component={RecipeItem} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        <Footer />
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
