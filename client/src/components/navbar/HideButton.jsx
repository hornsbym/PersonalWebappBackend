import React, { Component } from 'react';

class HideButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: true,
            symbol: " > "
        }
    }

    click = () =>{
        var nav;
        var body;
        nav = document.getElementById("Navbar")
        body = document.getElementById("buttonAndBody")
        if (this.state.clicked == true){
            nav.style.width = "15%"
            body.style.marginLeft = "19%"
            this.setState({clicked: false, symbol: " < "})
        } else {
            nav.style.width = "0%"
            body.style.marginLeft = '0%'
            nav.style.border = '0px'
            this.setState({clicked: true, symbol: " > "})
        }
    }

    render(){
        return(
            <div className="HideButton" >            
                <button onClick={this.click} id="HideButton">{this.state.symbol}</button>
            </div>
        )
    }
}

export default HideButton;