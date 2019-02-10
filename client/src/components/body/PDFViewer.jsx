import React, { Component } from 'react';

const hide = {
    display: "none"
}

class PDFViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }

    hide = () => {
        var viewer = document.getElementById("PDFViewer")
        viewer.style.width = "0px"
        viewer.style.height = "0px"
        viewer.style.margins= "0px"
    }

    show = () => {
        var viewer = document.getElementById("PDFViewer")
        viewer.style.width = "100%"
        viewer.style.height = "30em"
    }

    render() {
        return (
            <div className="PDFViewer">
                <iframe id="PDFViewer"></iframe>
                <div>
                    <button id = "hideButton" style={hide} onClick={this.hide}>Hide</button>
                    <button id = "showButton" style={hide} onClick={this.show}>Show</button>
                </div>
            </div>
        )
    }
}

export default PDFViewer;