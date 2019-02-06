import React, { Component } from 'react';

class Header extends Component {
    componentWillMount(){
        this.getPicture()
    }

    getPicture = () => {
        var data = { location: "profile.jpg" }

        const params = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('/getFile', params)
            .then(res => res.json())
            .then(data => {
                console.log("profile.jpg",data)
                var buffer = new Buffer(data)
                this.setState({buffer:buffer})
                this.displayPicture()
            });
    }

    displayPicture = () =>{
        var b64encoded = btoa(String.fromCharCode.apply(null, this.state.buffer));
        var datajpg = "data:image/jpg;base64," + b64encoded;
        document.getElementById("profile").src = datajpg;
    }

    render() {
        return (
            <div className="Header" id="header">
                <div id="name">Mitchell Hornsby</div>
                <img id="profile"></img>
                <div id="bio">
                        <div className="bioLine">Washington and Lee University Class of 2019</div>
                        <div className="bioLine">Computer Science major/Creative Writing minor</div>
                </div>
            </div>
        )
    }
}

export default Header;