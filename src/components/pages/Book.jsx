import React, {Component} from 'react';
/**
 * connect() will help us to take the statefrom Redux 
 * store and makeit available in our local component 
 */
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

// import dispatch action 'addToCart from cartActions
import {addToCart} from 'cartActions';

// import the style components
import {Row, Col, Well, Button} from 'react-bootstrap';

// create the Book component to display single book 
class Book extends Component{

    // custom function to call the 'addToCart()' action
    _handleBuy() {
        /**
         * Create a book arraya
         * this array will hold the items previously in the cart
         * and add the current book in the cart  as well  
         */
        const book = [...this.props.cart, this.props.book]
        this.props.addToCart(book);
    }

    render() {
        return(
            <Well>
                <Row>
                    <Col xs={12}>
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
        addToCart: addToCart
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
