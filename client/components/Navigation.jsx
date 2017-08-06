import React, {Component} from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
// import getCart  from cartAction 
import {getCart} from '../actions/cartActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Navigation extends Component {
  componentDidMount() {
    this.props.getCart();
  }
 
  render(){
  return (
    <Navbar inverse fixedTop>
    <Navbar.Header>
    <Navbar.Brand>
      <LinkContainer to="/">
        <a href="/">ShoppingApp</a>
      </LinkContainer>
    </Navbar.Brand>
    <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav>
      <LinkContainer to="/about">
      <NavItem eventKey={1} href="/about">About</NavItem>
      </LinkContainer>
      <LinkContainer to="/contact">
      <NavItem eventKey={2} href="/contact">Contact</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <LinkContainer to="/admin">
      <NavItem eventKey={1} href="/admin">Admin</NavItem>
      </LinkContainer>
      <LinkContainer to="/cart">
      <NavItem eventKey={2} href="/cart">
        Your Cart <Badge className="badge">{this.props.cartItems}</Badge>
      </NavItem>
      </LinkContainer>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
  }
} 

function mapDispatchToProps(dispatch){
  return bindActionCreators({
  getCart
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Navigation);