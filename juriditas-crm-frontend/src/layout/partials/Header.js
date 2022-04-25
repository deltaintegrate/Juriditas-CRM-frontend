import React from 'react';
import logo from '../../assets/img/logo.png';
import {Navbar, Nav} from 'react-bootstrap';


function Header() {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" >
            <Navbar.Brand className="px-3 p-1">
                <img src={logo} alt="logo" width="50px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/dashboard">Inicio</Nav.Link>
                    <Nav.Link href="/dashboard">Procesos</Nav.Link>
                    <Nav.Link href="/dashboard">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
