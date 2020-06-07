import React, { Component } from 'react';
import * as actions from '../AlbumList';
import Header from './Header';

class AlbumDetails extends Component {
    state = {
        album : '',
        tracks : []
    }
    componentDidMount(){
        actions.getAlbum(this.props.match.params.id).then(album => {
            this.setState({
                album,
                tracks: album.tracks.data
            })
        });
    }

    renderAlbum = () => {
        const {album} = this.state;
        return (
            <div className="col-md-4 mb-2">
            <div className="card border-danger">
                <img src={album.cover_big} alt="" className="card-img-top"/>
                <div className="card-body">
                    <span className="text-primary">{album.release_date}</span>
                    <div className="card-title">
                        {album.title}
                    </div>
                </div>
            </div>
            </div>
        );
    }
    render(){
        console.log(this.state);
        return(
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <Header />
                        <div className="row">
                            {this.renderAlbum()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default AlbumDetails;