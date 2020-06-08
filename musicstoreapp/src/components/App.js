import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AlbumPage from './AlbumPage';
import AlbumDetails from './AlbumDetails';
import AlbumCollection from './AlbumCollection';

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <Router>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/albumPage' component={AlbumPage} />
              <Route exact path='/albumDetails/:id' component={AlbumDetails} />
              <Route exact path='/collection' component={AlbumCollection} />
          </Switch>
      </Router>
    );
  }
}


export default App;
