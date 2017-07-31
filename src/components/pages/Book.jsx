import React, {Component} from 'react';
import {Row, Col, Well, Button} from 'react-bootstrap';

export default class Book extends Component{
    render() {
        return(
            <Well>
                <Row>
                    <Col xs={12}>
                        <h2>{this.props.book.title}</h2>
                        <p>{this.props.book.description}</p>
                        <h3>Rs. {this.props.book.price}</h3>
                        <Button bsStyle="success">Buy Now</Button>
                    </Col>
                </Row>
            </Well>
        ); 
    }
}


