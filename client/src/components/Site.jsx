import React, { Component } from 'react'
import Navbar from "./navbar/Navbar"
import HideButton from "./navbar/HideButton"
import Body from "./body/Body"

class Site extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users:[] 
        }
    }

    render(){
        return(
            <div className="Site">
                <div id="navbarContainer">
                    <Navbar/>
                </div>
                <HideButton/>
                <div id="bodyContainer">
                    <Body/>
                </div> 
            </div>
        )
    }
}

export default Site;