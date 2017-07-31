import React, {Component} from 'react';
/**
 * connect() will help us to take the statefrom Redux 
 * store and makeit available in our local component 
 */
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {removeFromCart} from 'cartActions';

// import the style components 
import {Panel, Col, Row, Well, Button, ButtonGroup, Label} from 'react-bootstrap';

// create teh Cart component
class Cart extends Component {

    // custom method to handle deleteion of items from the cart 
    _handleDelete(_id){
        /**
         * _id is the id of the cart item to be removed
         * create a copy of current items in the cart 
         * determine the index of the item with the given id 
         * remove the desired item from the array
         * use slice() to remove items because it's an immutable function 
         */

        const itemToDelete = this.props.cart;
        const indexOfItem = itemToDelete.findIndex((item) => item._id === _id);
        const cartAfterDelete = [...itemToDelete.slice(0, indexOfItem), ...itemToDelete.slice(indexOfItem + 1)];

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
                        <h6>{item.title}</h6><span>  </span>
                    </Col>
                    <Col xs={12} sm={2}>
                        <h6>Rs. {item.price}</h6>
                    </Col>
                    <Col xs={12} sm={4}>
                        <h6>Quantity <Label bsStyle="success"></Label></h6>
                    </Col>
                    <Col xs={6} sm={4}>
                        <ButtonGroup style={{width: '300px'}}>
                            <Button bsStyle="warning" bsSize="small">-</Button>
                            <Button bsStyle="primary" bsSize="small">+</Button>
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
        removeFromCart: removeFromCart
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);