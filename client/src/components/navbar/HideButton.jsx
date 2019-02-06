import React, { Component } from 'react';

class HideButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: true,
            symbol: " Menu "
        }
    }

    click = () =>{
        var nav;
        var body;
        nav = document.getElementById("navbarContainer")
        body = document.getElementById("bodyContainer")
        if (this.state.clicked == true){
            nav.style.width = "15%"
            body.style.width = "75%"
            this.setState({clicked: false, symbol: " Close "})
        } else {
            nav.style.width = "0%"
            body.style.marginLeft = '0%'
            body.style.width = "92%"
            nav.style.border = '0px'
            this.setState({clicked: true, symbol: " Menu "})
        }
    }

    render(){
        return(
            <button className="HideButton" onClick={this.click} id="HideButton">{this.state.symbol}</button>
        )
    }
}

export default HideButton;