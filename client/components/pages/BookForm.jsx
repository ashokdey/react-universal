import React, {Component} from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button, Row, Col, InputGroup, DropdownButton, Image, MenuItem} from 'react-bootstrap';
// to get input from react-bootstrap we need to import findDOMNode from react-dom
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks, postBook, deleteBook, resetForm} from 'bookActions';
import axios from 'axios';

class BookForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: [{}],
            imageName: '',
            imageAddr: ''
        }
    }

    componentDidMount() {
        this.props.getBooks();
        // request for the images from the API
        axios.get('/api/images')
            .then((response) => this.setState({
                images: response.data
            }))
            .catch((err) => {
                console.error('**ERROR in BookForm.jsx', err);
                this.setState({
                    imageName: '',
                    imageAddr: '',
                    images: []
                });
            });        
    }

    // custom method to handle the selection of image 
    _handleImageSelect(imageName, imageAddr) {
        this.setState({
            imageName: imageName,
            imageAddr: imageAddr
        });
    }

    // custom function to call the dispatch action on submit of form
    _handleSubmit() {
        // create the book arrays that we'll pass to the dispatcher
        const book = [{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value,
            image: '/static/images/books/' + findDOMNode(this.refs.imageName).value
        }];
        this.props.postBook(book);
    }

    // custom method to  clear the form 
    _resetForm() {
        // clear the form fields
        findDOMNode(this.refs.title).value = '';
        findDOMNode(this.refs.description).value = '';
        findDOMNode(this.refs.price).value = '';
        findDOMNode(this.refs.imageName).value = '';
        this.setState({
            imageName: '',
            imageAddr: ''
        });

        // reset the form button by dispatching the action
        this.props.resetForm();
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

        const imageList = this.state.images.map((imageObject, i) => (
            <MenuItem 
                key={i} 
                eventKey={imageObject.name} 
                onClick={this._handleImageSelect.bind(this, imageObject.name, imageObject.nameWithAddress)}
                >
                {imageObject.name}
            </MenuItem>
        ));

        return (
            <Row style={{marginTop: '85px'}}>
                <Col xs={10} xsOffset={1} sm={8} md={6} mdOffset={1} smOffset={2}>
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
                            <Button 
                                onClick={(!this.props.msg)?(this._handleSubmit.bind(this)):(this._resetForm.bind(this))} 
                                bsStyle={(!this.props.style)?('primary'):(this.props.style)}
                                >
                                {(!this.props.msg)?('Add Book'):(this.props.msg)}
                            </Button>
                        </Panel>
                        {/* 
                            Panel to  delete book  
                        */}
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
                {/* 
                    image select form element 
                */}
                <Col xs={10} xsOffset={1} sm={8} md={4} mdOffset={0} smOffset={2}>
                    <Panel>
                        <InputGroup>
                            <FormControl type="text" ref="imageName" value={this.state.imageName}/>
                                <DropdownButton
                                componentClass={InputGroup.Button}
                                id="input-dropdown-addon"
                                title="Select an Image"
                                bsStyle="primary"
                                >
                                    {imageList}
                                </DropdownButton>
                        </InputGroup>
                        <Image src={this.state.imageAddr} responsive style={{maxHeight: '500px', marginTop: '15px'}}/>
                    </Panel>
                </Col>
            </Row>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books,
        msg: state.books.msg,
        style: state.books.style
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBooks,
        postBook, 
        deleteBook,
        resetForm
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm)