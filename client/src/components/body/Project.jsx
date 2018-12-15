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
                this.displayPicture()
            });
    }

    displayPicture = () =>{
        var b64encoded = btoa(String.fromCharCode.apply(null, this.state.buffer));
        var datajpg = "data:image/jpg;base64," + b64encoded;
        document.getElementById(this.state.id).src = datajpg;
    }

    render() {
        return (
            <div className="Project">
                <a className = "projectLink" href={this.state.link}>{this.props.title}</a>
                <div>
                    <img className = "projectImage" id = {this.state.id} />
                </div>
                
            </div>
        )
    }
}

export default Project;