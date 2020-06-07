import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import {Link} from 'react-router-dom'
import Search from './SearchBar';
import * as actions from '../AlbumList';
import Albums from './AlbumPage';

class SearchPage extends Component {
    render(){
        return(
            <div>
                <Header />
                
                <Albums />
            </div>
        )
    }
}

export default SearchPage;