import React, { Component } from 'react';
import './App.css';
import * as actions from './components/AlbumList';

class Home extends Component {
  state = {
    albums:[]
  } 

  componentDidMount(){
    actions.getAlbums().then(item => this.setState({
      albums  : item
    }));
  }
  renderAlbums = () => {
      const {albums} = this.state;
      return albums && albums.length ?
        albums.map((item,index) => (
          <div key={index} className="col-md-4 mb-2">
            <div className="card border-danger">
              <img src={item.album.cover_big} alt="" className="card-img-top"/>
              <div className="card-body">
                <span className="text-primary">Eminem</span>
                <div className="card-title">
                  album title
                </div>
              </div>
              <div className="card-footer">
                <div className="links">
                  <a href="#"><i className="fas fa-info text-danger"></i></a>
                  <a href="#"><i className="fas fa-star text-danger"></i></a>
                </div>
              </div>
            </div>
          </div>
        ))
      : null;
  }

  render() {
    console.log(this.state);
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
            {this.renderAlbums()}
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
