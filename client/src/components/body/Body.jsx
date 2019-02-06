import React, { Component } from 'react';
import HideButton from "../navbar/HideButton";
import Programming from "./Programming";
import Writing from "./Writing";
import Header from "./Header";
import Contact from "./Contact";
import EmailWidget from "./EmailWidget";
import PDFViewer from "./PDFViewer"

class Body extends Component {
    render(){
        return(
            <div className="Body" id="Body">
                <Header/>
                <Programming/>
                <PDFViewer/>
                <Writing/>
                <Contact/>
                <EmailWidget/>
            </div>
        )
    }
}

export default Body;