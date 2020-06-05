import React from 'react';
import Axios from 'axios';

export default class AlbumList extends React.Component {
    state = {
        albums: []
    }

    componentDidMount(){
        Axios.get(`https://deezerdevs-deezer.p.rapidapi.com/album/39949511`, 
        { headers: { 
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":"06254c8926msh3b4318691ce804dp180048jsn3bdc56645c6c"
        } 
    })
        .then(res => {
            console.log(res)
            this.setState({ albums: res.data })
        })

    }

    render() {
        return (
            <ul>
                <li>{this.state.albums.title}</li>
            </ul>
        )
    }
}
