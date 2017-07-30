import React from 'react';
/**
 * connect() will help us to take the statefrom Redux 
 * store and makeit available in our local component 
 */
import {connect} from 'react-redux';

class BookList extends React.Component {

    render() {
        const bookList = this.props.books.map((book) => (
            <div key={book.id}>
                <h1>{book.title}</h1>
                <h2>{book.description}</h2>
                <h2>{book.price}</h2>
            </div>
        ));

        return (
            <div>
                <h1>Hello React</h1>
                {bookList}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        books : state.books.books
    }
}

export default connect(mapStateToProps)(BookList);