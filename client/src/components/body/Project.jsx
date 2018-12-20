import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: `${this.props.id}`,
            location: this.props.location,
            link:this.props.link
        }
    }

    componentWillMount(){
        this.getPicture()
    }

    getPicture = () => {
        var data = { location: this.state.location }

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
                console.log(this.state.location,data)
                var buffer = new Buffer(data)
                this.setState({buffer:buffer})
                this.displayPicture()})
            .then(data => this.resizePicture());
    }

    displayPicture = () =>{
        var b64encoded = btoa(String.fromCharCode.apply(null, this.state.buffer));
        var datajpg = "data:image/jpg;base64," + b64encoded;
        document.getElementById(this.state.id).src = datajpg;
        this.resizePicture()
    }
    

    resizePicture = () => {
        var imageWidth = document.getElementById(this.state.id).clientWidth
        var screenWidth = window.screen.availWidth
        console.log("id:",this.state.id, "-- width:",imageWidth,"-- 60%:",screenWidth*.6)
        if (imageWidth > screenWidth*.6){
            document.getElementById(this.state.id).setAttribute("width","60%")
    }
}

    render() {
        return (
            <div className="Project">
                <a className = "projectLink" href={this.state.link}>{this.props.title}</a>
                <div className = "imageContainer" id = {"c"+this.state.id}>
                    <img className = "projectImage" id = {this.state.id} />
                </div>
                
            </div>
        )
    }
}

export default Project;