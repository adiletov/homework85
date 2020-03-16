import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand>MusikOffline</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/">Playlist</NavLink>
                    </NavItem>
                    {this.props.user ?
                        <>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/track_history">Track history</NavLink>
                            </NavItem>
                        </>
                        : <>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/register">Sign up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to="/login">Sign in</NavLink>
                            </NavItem>
                        </>
                    }
                </Nav>
            </Navbar>
        );
    }
}

export default Header;