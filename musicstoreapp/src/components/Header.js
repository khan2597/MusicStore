import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    render(){
        return(
        <div className="navbar2">
          <ul className="navItems2">
            <li>Home</li>
            <li>MusicStoreLogo</li>
            <li>Basket</li>
          </ul>
        </div>
        )
    }
}

export default Header;