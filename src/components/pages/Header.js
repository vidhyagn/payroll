import React from "react"
import ScrollBar from "../views/ScrollBar";
import {Dropdown, Col, Row } from 'react-bootstrap';

import xLogo from '../../assets/images/brand-logo.png';
import user from '../../assets/images/user.jpg'

class Header extends React.Component{
    render(){
        return(

            <header className="header-block">
                <figure>
                    <img src={xLogo} />
                </figure>                
                <div className="header-right">
                    <div className="user-info-block">
                        <Dropdown>
                            <Dropdown.Toggle>
                                <figure>
                                    <img src={user} />
                                </figure>
                                <div className="user-info">
                                    <h5>John Doe</h5>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                                <div className="dropdown-divider" role="separator"/>
                                <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
