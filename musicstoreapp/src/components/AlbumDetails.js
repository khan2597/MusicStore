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
    renderTracks = () => {
        const {tracks} = this.state;
        return tracks && tracks.length ? 
            tracks.map((track,index)=> (
                <figure key={index} className="figure">
                    <figcaption className="figure-caption text-xs-right">Listen to {track.title}</figcaption>
                    <audio controls src={track.preview}>
                    </audio>
                </figure>
            ))
            :
            null;
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
                <div className="card-footer">
                    {this.renderTracks()}
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