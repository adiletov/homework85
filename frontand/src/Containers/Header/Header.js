import React from 'react';
import {Nav, Navbar, NavbarBrand,  NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';
import {useSelector} from "react-redux";


const Header = () => {
    return (
            <Navbar color="light" light expand="md">
                <NavbarBrand>Playlist</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/">Исполнители</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
    );
};

export default Header;