import React, {Component} from 'react';
import './MainBar.css';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink,
     InputGroup, InputGroupAddon, InputGroupText, Input,
     Button
} from 'reactstrap';

class MainBar extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <div className="MainBar">
                        <Nav className="mr-auto" navbar>
                            <NavbarBrand>Win:G</NavbarBrand>
                            <NavItem>
                                <NavLink>Streaming</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Live</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Support</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Concert</NavLink>
                            </NavItem>
                            <InputGroup className='SearchBar'>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText></InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Search"/>
                            </InputGroup>
                        </Nav>
                    </div>
                    <Button>로그인</Button>
                </Navbar>
            </div>
        );
    }
}

export default MainBar;