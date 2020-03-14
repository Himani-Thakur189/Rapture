import React, { Component } from 'react';
import Navbar from './Navbar'
class Header extends Component {
    render() {
        
        return (
            <div>
              <h1><Navbar {...this.props}/></h1>
            </div>
        );
    }
}

export default Header;