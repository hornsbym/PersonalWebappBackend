import React, { Component } from 'react'
import Navbar from "./navbar/Navbar"
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
                <Navbar/>
                <Body/>
            </div>
        )
    }
}

export default Site;