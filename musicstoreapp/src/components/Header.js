import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(
        <div className="navbar2">
          <ul className="navItems2">
            <li>
              <Link className="captionText" to="/">Home</Link>
            </li>
            <li>MusicStore</li>
            <li>
              <Link className="captionText" to="/albumPage">Search</Link>
            </li>
          </ul>
        </div>
        )
    }
}

export default Header;