import React, { Component } from 'react';
import '../App.css';
import * as actions from './AlbumList';

class Albums extends Component {
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
                {item.album.title}
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
    render(){
        {this.renderAlbums()}
    }
}
    

export default Albums;