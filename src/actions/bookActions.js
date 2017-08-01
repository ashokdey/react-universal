'use strict';
// import Axios for making http calls to the api
import axios from 'axios';

// get books
export  function getBooks(book) {
    return{
        type: 'GET_BOOKS',
    }
}

// post a book
export  function postBook(book) {
    // return a function 
    return function(dispatch) {
        axios.post('/books', book)
            .then((response) => dispatch({
                type: 'POST_BOOK',
                payload: response.data
            }))
            .catch((err) => dispatch({
                type: 'POST_BOOK_REJECTED',
                payload: 'There was an error posting new book!'
            }));
    }
}

// delete a book
export  function deleteBook(_id) {
    return{
        type: 'DELETE_BOOK',
        payload: _id
    }
}

// update a book
export  function updateBook(book) {
    return{
        type: 'UPDATE_BOOK',
        payload: book
    }
}
