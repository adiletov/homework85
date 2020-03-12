import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand,  NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand>Playlist</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/">Исполнители</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/">Добавить исполнителя</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        );
    }
}

export default Header;