import { Component } from 'react';
import { NavDropdown, MenuItem, Nav } from 'react-bootstrap';

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="header">
            	<div className="left">
                    <img className="img-1" src={require('../../styles/img/log.png')} />
                    <span>CRM</span>
                    <img className="img-2" src={require('../../styles/img/menu.png')} />
            	</div>
            	<div className="right">
                    <Nav className="menu">
                        <NavDropdown eventKey="0" title="你好，张三！">
                            <MenuItem >注销</MenuItem>
                        </NavDropdown>
                    </Nav>
            		<img src={require('../../styles/img/avatar.png')} />
            	</div>
            </div>
        );
    }
}

export default Header;
