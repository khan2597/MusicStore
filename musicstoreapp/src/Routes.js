import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './components/App';
import { Router } from "react-router";
import SearchPage from './components/SearchPage';

const Routes = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/"  component={App} />
        <Route exact path="/SearchPage" component={SearchPage} />
      </Switch>
    </Router>
  )
}

export default Routes;