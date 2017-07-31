import React, {Component} from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';

const Navigation = () => (
    <Navbar inverse fixedTop>
        <Navbar.Header>
        <Navbar.Brand>
            <a href="/">ReactUniversalShopping</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
            <NavItem eventKey={1} href="/about">About</NavItem>
            <NavItem eventKey={2} href="/contact">Contact</NavItem>
        </Nav>
        <Nav pullRight>
            <NavItem eventKey={1} href="/admin">Admin</NavItem>
            <NavItem eventKey={2} href="cart">
                Your Cart <Badge className="badge">4</Badge>
            </NavItem>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
);


export default Navigation;