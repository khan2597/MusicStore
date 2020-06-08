import React, { Component } from 'react';
import '../App.css';
import * as actions from '../AlbumList';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import swal from 'sweetalert';
import Header from './Header';

class Albums extends Component {
    state = {
        albums:[]
    } 
    
    componentDidMount(){
        actions.getAlbums().then(item => this.setState({
            albums  : item
        }));
    }
    addToFavourites = (album) => {
        let oldFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        if(this.checkAlbum(oldFavourites,album)){
            swal({
                title : 'Album exists!',
                text : 'This album is already in your collection',
                icon : 'warning'
            });
            return false;
        }
        oldFavourites.push(album);
        let favourites = oldFavourites;
        localStorage.setItem('favourites', JSON.stringify(favourites));
        swal({
            title : 'Album added!',
            text : 'This album has been added to your collection',
            icon : 'success'
        });
    }
    checkAlbum = (albums,album) => {
        let found = albums.some(function(item){
            return item.album.id === album.album.id;
        });
        return found;
    }
    searchAlbums = (term) => {
        actions.getAlbums(term).then(item => this.setState({
            albums : item
        }))
    }
    renderAlbums = () => {
        const {albums} = this.state;
        return albums && albums.length ?
        albums.map((item,index) => (
            <div key={index} className="col-md-4 mb-2">
            <div className="card border-danger">
                <img src={item.album.cover_big} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="text-primary">{item.artist.name}</h5>
                    <div className="card-title">
                        {item.album.title}
                    </div>
                    <Link className="captionText goToAlbum" to={`/albumDetails/${item.album.id}`}>Go To Album</Link>
                    <button className="favouriteButton" onClick={() => this.addToFavourites(item)} href="#">Add to Collection</button>
                </div>
                <div className="card-footer">
                    
                </div>
            </div>
            </div>
        ))
        : null;
    }
    render(){
        return(
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <Header />
                        <SearchBar searchAlbums={this.searchAlbums} />
                        <div className="row">
                            {this.renderAlbums()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    

export default Albums;