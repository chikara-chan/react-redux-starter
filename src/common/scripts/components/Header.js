import React, { Component } from 'react';
import { NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import imgLogo from '../../styles/img/logo.png';
import imgMenu from '../../styles/img/menu.png';
import imgAvatar from '../../styles/img/avatar.png';

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <header>
            	<div className="left">
                    <img className="img-1"
                         src={imgLogo} />
                    <span>CRM</span>
                    <img className="img-2"
                         src={imgMenu} />
            	</div>
            	<div className="right">
                    <Nav className="menu">
                        <NavDropdown eventKey="0"
                                     title="你好，张三！">
                            <MenuItem >注销</MenuItem>
                        </NavDropdown>
                    </Nav>
            		<img src={imgAvatar} />
            	</div>
            </header>
        );
    }
}

export default Header;
