import React, { Component } from 'react';
import '../App.css';
import * as actions from '../AlbumList';
import {Link} from 'react-router-dom';
import Header from './Header';

class Collection extends Component {
    state = {
        albums:[]
    } 
    
    componentDidMount(){
        let favourites = actions.getFavouritesAlbums();
        this.setState({
            albums : JSON.parse(favourites)
        })
    }
    renderAlbums = () => {
        const {albums} = this.state;
        return albums && albums.length ?
        albums.map((item,index) => (
            <div key={index} className="col-md-4 mb-2">
            <div className="card border-danger">
                <img src={item.album.cover_big} alt="" className="card-img-top"/>
                <div className="card-body">
                    <span className="text-primary">{item.artist.name}</span>
                    <div className="card-title">
                        {item.album.title}
                        <Link className="a" to={`/albumDetails/${item.album.id}`}>Go To Album</Link>
                        <a onClick={() => this.addToFavourites(item)} href="#" className="link"><i className="fas fa-star text-danger"></i></a>
                    </div>
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
                        <div>My Collection</div>
                        <div className="row">
                            {this.renderAlbums()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    

export default Collection;