import React, {Component} from 'react';
/**
 * connect() will help us to take the statefrom Redux 
 * store and makeit available in our local component 
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/bookActions';

// Import react-bootstrap here 
import {Grid, Col, Row, Button} from 'react-bootstrap';

// Import other react components here 
import Book from 'Book';
import BookForm from 'BookForm';
import Cart from 'Cart';


// create the BookList component to display the list of Books 
class BookList extends Component {

    componentDidMount() {
        // Dispatching an Action
        this.props.getBooks();
    }

    render() {
        const bookList = this.props.books.map((book) => (
            <Col xs={12} sm={6} md={4} key={book.id}>
                <Book book={book} />
            </Col>
        ));

        return (
            <Grid>
                <Row>
                    <Cart/>
                </Row>
                <Row style={{marginTop: '15px'}}>
                    <Col xs={12} sm={6}>
                        <BookForm/>
                    </Col>            
                    {bookList}
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state){
    return {
        books : state.books.books
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getBooks: getBooks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);