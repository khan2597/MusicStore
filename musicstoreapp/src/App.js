import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import {Link} from 'react-router-dom'
import Search from './components/SearchBar';
import AlbumPage from './components/AlbumPage'
import * as actions from './components/AlbumList';

class Home extends Component {
  

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="main">
          
          <Header />
          <Search searchAlbums={this.searchAlbums} />

          <div className="row">
            <AlbumPage />
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
}


export default Home;
