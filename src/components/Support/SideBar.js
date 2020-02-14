import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import './SideBar.css';

class SideBar extends React.Component {
    render() {
        return (
            <div className="SideBar">
                <img src="wing.png" witch="100px" height="100px"></img>
                <Nav tabs vertical>
                    <NavItem>
                        <NavLink>진행중인 후원</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>마감된 후원</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Disabled Link</NavLink>
                    </NavItem>
                </Nav>
                <hr/>
            </div>
        );
    }
}

export default SideBar;