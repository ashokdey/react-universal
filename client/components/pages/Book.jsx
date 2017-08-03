import React, {Component} from 'react';
/**
 * connect() will help us to take the statefrom Redux 
 * store and makeit available in our local component 
 */
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

// import dispatch action 'addToCart from cartActions
import {addToCart, updateCart} from '../../actions/cartActions';

// import the style components
import {Row, Col, Well, Button, Image} from 'react-bootstrap';

// create the Book component to display single book 
class Book extends Component{
    constructor(props){
        super(props);
        this.state = {
            readMore: false
        }
    }

    // custom method to handle the readMore link in the book description
    _handleReadMore() {
        this.setState({
            readMore: !this.state.readMore
        });
    }

    // custom function to call the 'addToCart()' action
    _handleBuy() {
        /**
         * Create a book array
         * this array will hold the items previously in the cart
         * and add the current book in the cart  as well  
         */
        // cartBook is the book to be added 
        const cartBook = {...this.props.book, quantity: 1};
        // 
        const allBooks = [...this.props.cart, cartBook];
        
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
                this.props.addToCart(allBooks);
            }
            else {
                this.props.updateCart(_id, 1, this.props.cart);
            }
        }
        else {
            // if the cart is empty then add the item to the cart 
            this.props.addToCart(allBooks);
        }
    }

    render() {
        return(
            <Well style={{maxHeight: '350px', minHeight: '350px'}}>
                <Row>
                    <Col xs={12} sm={6}>
                        <Image src={this.props.book.image} responsive/>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <h2>{this.props.book.title}</h2>
                        {/* 
                            conditionally render the description, 
                            initially  only show 50 chars 
                        */}
                        <p>
                            {
                                (this.props.book.description.length > 50 && this.state.readMore == false)
                                ?(this.props.book.description.substring(0, 40))
                                :(this.props.book.description)
                            }

                            <button className="read-more-btn" onClick={this._handleReadMore.bind(this)}>
                                {
                                    (this.state.readMore == false 
                                    && this.props.book.description !== null
                                    && this.props.book.description.length > 40 )?('read more...'):('read less...')
                                }
                            </button>
                        </p>
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
