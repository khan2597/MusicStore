import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import AlbumPage from './components/AlbumPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={App} />
    <Route path="/albumPage" component={AlbumPage} />
  </Route>
);