import React, { Component } from 'react';
import Project from "./Project"
import content from "./content.json"

class Programming extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects: []
        }
    }

    componentWillMount(){
        this.getProject()
    }

    getProject = () => {
        for(var i = 0; i < content.projects.length; i++) {
            var title = content.projects[i].title;
            var location = content.projects[i].location;
            var link = content.projects[i].link;
            
            var pictureLocations  = []
            for(var n = 0; n < location.length; n++){
                pictureLocations.push(location[n])
            }
        
            var project = <Project title={title} pictureLocations={pictureLocations} link={link} id={"p"+i}/>
            this.addProject(project)
        }
    }

    addProject = (project) => {
        console.log("addProject called")
        this.setState(prevState => ({
            projects: [...prevState.projects, project]
        }))
    }

    render(){
        return(
            <div className="Programming" id = 'programming'>
                <div style={{fontSize:"2rem",fontWeight:'bold'}}>Programming Projects</div>
                <div>{this.state.projects}</div>
            </div>
        )
    }
}

export default Programming;