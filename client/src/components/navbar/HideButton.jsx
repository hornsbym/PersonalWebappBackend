import React, { Component } from 'react';

class HideButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false,
            symbol: " < "
        }
    }

    click = () =>{
        var nav;
        var body;
        nav = document.getElementById("Navbar")
        body = document.getElementById("Body")
        console.log(nav)
        if (this.state.clicked == true){
            console.log("Showing menu")
            nav.style.width = "25%"
            body.style.marginLeft = '26%'
            nav.style.border = 'solid black 1px'
            this.setState({clicked: false, symbol: " < "})
        } else {
            console.log("Hiding menu")
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