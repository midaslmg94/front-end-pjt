import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import './SideBar.css';

class SideBar extends React.Component {
    render() {
        return (
            <div className="SideBar" width>
                <img src="wing.png" witdh="100px" height="100px"></img>
                <Nav tabs vertical>
                    <NavItem>
                        <NavLink href="#">진행중인 후원</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">마감된 후원</NavLink>
                    </NavItem>
                </Nav>
                <hr/>
            </div>
        );
    }
}

export default SideBar;