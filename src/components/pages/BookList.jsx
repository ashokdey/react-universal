import React from 'react';
/**
 * connect() will help us to take the statefrom Redux 
 * store and makeit available in our local component 
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/bookActions';

// Import react-bootstrap here 
import {Grid, Col, Row, Button} from 'react-bootstrap';

class BookList extends React.Component {

    componentDidMount() {
        // Dispatching an Action
        this.props.getBooks();
    }

    render() {
        const bookList = this.props.books.map((book) => (
            <div key={book.id}>
                <h1>{book.title}</h1>
                <h2>{book.description}</h2>
                <h2>{book.price}</h2>
                <Button bsStyle="success">But Now</Button>
            </div>
        ));

        return (
            <Grid>
                <Row style={{marginTop: '15px'}}>
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