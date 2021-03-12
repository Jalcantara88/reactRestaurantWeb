import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <>
                <Navbar dark sticky="top" expand="sm">
                    <NavbarBrand>reactRestaurant</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar className="">
                            <Nav navbar className="me-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        Menu
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    

                </Navbar>
      
            </>
        )
    }



}


export default Header;