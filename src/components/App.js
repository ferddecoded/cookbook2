import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Home from './Home';
import Signin from './Signin';
import Favorites from './Favorites';
import Favorite from './Favorite';

const AppWrapper = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
`;

const App = () => {
  const [loggedIn, setLoggedInState] = useState(false);
  return (
    <AppWrapper>
      <Router>
        <Nav loggedIn={loggedIn} setLoggedInState={setLoggedInState} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/favorite/:id" component={Favorite} />
        </Switch>
      </Router>
    </AppWrapper>
  );
};

export default App;
