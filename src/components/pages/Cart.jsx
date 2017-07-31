import React, {Component} from 'react';
/**
 * connect() will help us to take the statefrom Redux 
 * store and makeit available in our local component 
 */
import {connect} from 'react-redux';

// import the style components 
import {Panel, Col, Row, Well, Button} from 'react-bootstrap';

// create teh Cart component
class Cart extends Component {

    // custom function to render when there are no items in the cart    
    _renderEmpty() {
        return (
            <div></div>
        );
    }

    // custom function to render when there are items in the cart
    _renderCart() {
        // list of items in the cart 
        const cartItemsList = this.props.cart.map((item) => (
            <Panel key={item.id}>
                <Row>
                    <Col xs={12} sm={4}>
                        <h3>{item.title}</h3>
                    </Col>
                </Row>
            </Panel>
        ));
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

export default connect(mapStateToProps)(Cart);