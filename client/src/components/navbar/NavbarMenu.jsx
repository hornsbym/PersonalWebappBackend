import React, { Component } from 'react';

class NavbarMenu extends Component {
    render() {
        return (
            <div className="Menu" id="Menu">
                <div className="menu">
                    <ul>
                        <li className="navbarItem">
                            <a className="navbarLink" href="#header">HOME</a>
                        </li>
                        <li className="navbarItem">
                            <a className="navbarLink" href="#programming">PROGRAMMING</a>
                        </li>
                        <li className="navbarItem">
                            <a className="navbarLink" href="#writing">WRITING</a>
                        </li>
                        <li className="navbarItem">
                            <a className="navbarLink" href="#contact">CONTACT</a>
                        </li>
                        <li className="navbarItem">
                            <a className="navbarLink" target="_blank" href="https://www.linkedin.com/in/mitchell-hornsby-3b4690153/">LINKEDIN</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavbarMenu;