import React, { Component } from 'react';
import Menu from "./NavbarMenu"

class Navbar extends Component{
    render(){
        return(
            <div className="Navbar" id="Navbar">
                <Menu/>
            </div>
        )
    }
}

export default Navbar;