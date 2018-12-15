import React, { Component } from 'react'

class EmailWidget extends Component {
    sendEmail = () => {
        var senderBox = document.getElementById("emailSender");
        var messageBox = document.getElementById("emailMessage");
        var sender = senderBox.value;
        var message = messageBox.value;

        var data = {
            message: message,
            sender: sender
        }

        if (sender !== "" && message !== "") {
            fetch('/sendEmail', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        senderBox.value = "";
        messageBox.value = "";
    }
    render() {
        return (
            <div style={{fontWeight:"bold"}} className="Email">
                Email me directly:
                <div>
                    <textarea id="emailSender" placeholder="Name" />
                </div>
                <div>
                    <textarea id="emailMessage" placeholder="Message" />
                </div>
                <button id="sendButton" onClick={this.sendEmail}>Send</button>
            </div>
        )
    }
}

export default EmailWidget;