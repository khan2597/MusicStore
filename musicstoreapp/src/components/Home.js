import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

class Home extends Component {
  render() {
    console.log(this.state);
    return (
        <div className="App">
          <div className="main">
            
            <Header />

            <div className="categories">
              <div className="section">
                <a>Vinyl</a>
              </div>
              <div className="section">
                <a>CD</a>
              </div>
              <div className="section">
                <a>My Collection</a>
              </div>
              <div className="section">
                <a>Wishlist</a>
              </div>
            </div>
    
            <div className="trendingReleases">
              <h4 className="trendingTitle">Trending Releases</h4>
              <div className="gallery js-flickity"
                data-flickity-options='{ "wrapAround": true }'>
                <div className="gallery-cell"></div>
                <div className="gallery-cell"></div>
                <div className="gallery-cell"></div>
                <div className="gallery-cell"></div>
                <div className="gallery-cell"></div>
              </div>
            </div>
            
          </div>
        </div>
    );
  }
}


export default Home;
