import React, {Component} from 'react';
/**
 * connect() will help us to take the statefrom Redux 
 * store and makeit available in our local component 
 */
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

// import dispatch action 'addToCart from cartActions
import {addToCart, updateCart} from 'cartActions';

// import the style components
import {Row, Col, Well, Button, Image} from 'react-bootstrap';

// create the Book component to display single book 
class Book extends Component{

    // custom function to call the 'addToCart()' action
    _handleBuy() {
        /**
         * Create a book arraya
         * this array will hold the items previously in the cart
         * and add the current book in the cart  as well  
         */
        const cartBook = {...this.props.book, quantity: 1};
        const book = [...this.props.cart, cartBook];
        
        // check if cart is empty 
        if (this.props.cart.length > 0) {
            // if the cart is not ampty check if it already contains the similar item 
            let _id = this.props.book._id;
            let itemInCart = this.props.cart.findIndex((item) => item._id == _id);

            /**
             * if itemInCart is -1 which means there are no items similar to this
             * simple add the item in the cart 
             */

            if(itemInCart == -1) {
                this.props.addToCart(book);
            }
            else {
                this.props.updateCart(_id, 1, this.props.cart);
            }
        }
        else {
            // if the cart is empty then add the item to the cart 
            this.props.addToCart(book);
        }
    }

    render() {
        return(
            <Well>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <Image src={this.props.book.image} responsive />
                        <h2>{this.props.book.title}</h2>
                        <p>{this.props.book.description}</p>
                        <h3>Rs. {this.props.book.price}</h3>
                        <Button onClick={this._handleBuy.bind(this)} bsStyle="primary">Buy Now</Button>
                    </Col>
                </Row>
            </Well>
        ); 
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addToCart: addToCart,
        updateCart: updateCart
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
