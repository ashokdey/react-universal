import React, {Component} from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button, Row, Col} from 'react-bootstrap';
// to get input from react-bootstrap we need to import findDOMNode from react-dom
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks, postBook, deleteBook} from 'bookActions';

class BookForm extends Component {
    componentDidMount() {
        this.props.getBooks();        
    }

    // custom function to call the dispatch action on submit of form
    _handleSubmit() {
        // create the book arrays that we'll pass to the dispatcher
        const book = [{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value,
        }];
        this.props.postBook(book);
        
        // clear the form fields
        findDOMNode(this.refs.title).value = '';
        findDOMNode(this.refs.description).value = '';
        findDOMNode(this.refs.price).value = '';
    }

    // custom function to delete book 
    _deleteBook() {
        let _id = findDOMNode(this.refs.deleteTitle).value;
        this.props.deleteBook(_id);
    }

    render() {
        const books = this.props.books;
        // book list that maps to the list of books 
        const bookList = books.map((book) => (
            <option key={book._id} value={book._id}>{book.title}</option>
        ));


        return (
            <Row style={{marginTop: '85px'}}>
                <Col xs={12} sm={6} mdOffset={3} smOffset={3}>
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
                        <Panel style={{marginTop: '25px'}}>
                            <FormGroup controlId="formControlSelect">
                                <ControlLabel>Select a book title to delete</ControlLabel>
                                <FormControl ref="deleteTitle" componentClass="select" placeholder="Select"> 
                                    <option value="Select">Select</option>
                                    {bookList}
                                </FormControl>
                            </FormGroup>
                            <Button onClick={this._deleteBook.bind(this)} bsStyle="danger">Delete Book</Button>
                        </Panel>
                    </Well>
                </Col>
            </Row>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBooks,
        postBook, 
        deleteBook
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm)