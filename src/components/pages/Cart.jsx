import React, {Component} from 'react';
/**
 * connect() will help us to take the statefrom Redux 
 * store and makeit available in our local component 
 */
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {removeFromCart, updateCart} from 'cartActions';

// import the style components 
import {Panel, Col, Row, Well, Button, ButtonGroup, Label} from 'react-bootstrap';

// create teh Cart component
class Cart extends Component {

    // custom method to handle increament of items in the cart     
    _increaseQuantity(_id){
         this.props.updateCart(_id, 1);
    }

    // custom method to handle decreament of items in the cart 
    _decreaseQuantity(_id, quantity){
        if(quantity > 1) {
            this.props.updateCart(_id, -1);        
        }
    }

    // custom method to handle deletion of items from the cart 
    _handleDelete(_id){
        /**
         * _id is the id of the cart item to be removed
         * create a copy of current items in the cart 
         * determine the index of the item with the given id 
         * remove the desired item from the array
         * use slice() to remove items because it's an immutable function 
         */

        const cartItems = this.props.cart;
        const indexOfItem = cartItems.findIndex((item) => item._id === _id);
        const cartAfterDelete = [...cartItems.slice(0, indexOfItem), ...cartItems.slice(indexOfItem + 1)];

        this.props.removeFromCart(cartAfterDelete);
    }

    // custom function to render when there are no items in the cart    
    _renderEmpty(){
        return (
            <div></div>
        );
    }

    // custom function to render when there are items in the cart
    _renderCart(){
        // list of items in the cart 
        const cartItemsList = this.props.cart.map((item) => (
            <Panel key={item._id}>
                <Row>
                    <Col xs={12} sm={4}>
                        <h4>{item.title}</h4><span>  </span>
                    </Col>
                    <Col xs={12} sm={2}>
                        <h4>Rs. {item.price}</h4>
                    </Col>
                    <Col xs={12} sm={4}>
                        <h4>Quantity <Label bsStyle="success">{item.quantity}</Label></h4>
                    </Col>
                    <Col xs={6} sm={4}>
                        <ButtonGroup style={{width: '300px'}}>
                            <Button onClick={this._decreaseQuantity.bind(this, item._id, item.quantity)} bsStyle="warning" bsSize="small">-</Button>
                            <Button onClick={this._increaseQuantity.bind(this, item._id)} bsStyle="primary" bsSize="small">+</Button>
                            <span>     </span>
                            <Button onClick={this._handleDelete.bind(this, item._id)} bsStyle="danger" bsSize="small">Delete</Button>
                        </ButtonGroup>
                    </Col>                    
                </Row>
            </Panel>
        ), this);
        return(
            <Panel header="Cart" bsStyle="primary">
                {cartItemsList}
            </Panel>
        );
    }

    render() {
        // render the cart if atleast 1 item is there in the cart
        if(this.props.cart[0]) {
            return this._renderCart();
        }
        else {
            return this._renderEmpty();
        }
    }
}   

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
} 

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        // we can alsouse the ES6 short literal syntax since both names are same 
        removeFromCart: removeFromCart,
        updateCart: updateCart

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);