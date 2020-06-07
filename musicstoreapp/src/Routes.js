import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import App from './App'
import AlbumDetails from './components/AlbumDetails'

const Routes = () => {
  return(
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/details/:id" exact component={AlbumDetails} />
    </Switch>
  )
}

export default Routes;