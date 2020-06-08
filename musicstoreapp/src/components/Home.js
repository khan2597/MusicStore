import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    console.log(this.state);
    return (
        <div className="App">
          <div className="main">
            
            <Header />

            <div className="categories">
              <div className="section" id="searchSection">
                <div className="caption"></div>
                <Link className="captionText" to="/albumpage">Search</Link>
              </div>
              <div className="section" id="cdSection">
                <div className="caption"></div>
                <a className="captionText" href="#">CD</a>
              </div>
              <div className="section" id="collectionSection">
                <div className="caption"></div>
                <Link className="captionText" to="/collection">My Collection</Link>
              </div>
              <div className="section" id="wishlistSection">
                <div className="caption"></div>
                <a className="captionText" href="#">Wishlist</a>
              </div>
            </div>
    
            <div className="trendingReleases">
              <h4 className="trendingTitle">Trending Releases</h4>
              <div className="gallery js-flickity" data-flickity-options='{ "wrapAround": true }'>
                <div id="kendrick" className="gallery-cell"></div>
                <div id="drake" className="gallery-cell"></div>
                <div id="billie" className="gallery-cell"></div>
                <div id="tyler" className="gallery-cell"></div>
                <div id="nwa" className="gallery-cell"></div>
              </div>
            </div>
            
          </div>
        </div>
    );
  }
}


export default Home;
