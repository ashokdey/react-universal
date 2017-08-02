import React, {Component} from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';

// import getCart  from cartAction 
import {getCart} from 'cartActions';

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
                    <a href="/">ReactUniversalShoppingApp</a>
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
                    <NavItem eventKey={2} href="/cart">
                        Your Cart <Badge className="badge">{this.props.cartItems}</Badge>
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
} 

// function mapStateToProps(state) {
//     return {

//     }
// }

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getCart
    }, dispatch);
}



export default connect(null, mapDispatchToProps)(Navigation);