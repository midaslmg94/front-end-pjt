import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


class MenuTab extends Component {
    state = { 
        searchData :'', // 검색창 입력 데이터 
    }

    onChange = (e) => {     // 검색창에 값 입력했을때 받아오기. 
        this.setState({
            searchData : e.target.value
        });
    };

    render() {
        return (
            <div className="MenuTab">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">win:G</NavbarBrand>

                    <Nav className="Menu" navbar>
                        <NavItem>  <NavLink href="./components/Test1.js">Streaming</NavLink>  </NavItem>
                        
                        <NavItem>  <NavLink href="./components/Test2.js">Live</NavLink>  </NavItem>

                        <NavItem>  <NavLink href="./components/Test1.js">Support</NavLink>  </NavItem>

                        <NavItem>  <NavLink href="./components/Test2.js">Concert</NavLink>  </NavItem>

                        <NavItem>  <NavLink href="./components/Test2.js">Login</NavLink>  </NavItem>
                    </Nav>               
                    
                    <input type = "search" value placeholder="검색어를 입력하세요." value = {this.state.searchData} onChange = {this.onChange} />
                </Navbar>
            </div>
        );
    }
}

export default MenuTab;