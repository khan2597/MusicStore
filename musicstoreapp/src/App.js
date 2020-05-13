import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <ul className="navItems">
          <li>Home</li>
          <li>MusicStoreLogo</li>
          <li>Basket</li>
        </ul>
      </div>
      <div className="main">
        <div className="newReleases">
          <a>New Releases</a>
        </div>

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
          <div class="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'>
            <div class="gallery-cell"></div>
            <div class="gallery-cell"></div>
            <div class="gallery-cell"></div>
            <div class="gallery-cell"></div>
            <div class="gallery-cell"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
