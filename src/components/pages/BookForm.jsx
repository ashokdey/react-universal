import React, {Component} from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
// to get input from react-bootstrap we need to import findDOMNode from react-dom
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBook} from '../../actions/bookActions';

class BookForm extends Component {

    // custom function to call the dispatch action on submit of form
    _handleSubmit() {
        // create the book arrays that we'll pass to the dispatcher
        const book = [{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value,
        }];
        this.props.postBook(book);
    }

    render() {
        return (
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Title"
                            ref="title"
                        />
                    </FormGroup>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Description"
                            ref="description"
                        />
                    </FormGroup>
                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Price"
                            ref="price"
                        />
                    </FormGroup>
                    <Button onClick={this._handleSubmit.bind(this)} bsStyle="primary">Add Book</Button>
                </Panel>
            </Well>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({postBook: postBook}, dispatch);
}

export default connect(null, mapDispatchToProps)(BookForm)