'use strict';
// import Axios for making http calls to the api
import axios from 'axios';

// get books
export function getBooks(book) {
    return function(dispatch) {
        axios.get('/api/books')
            .then((response) => dispatch({ 
                type: 'GET_BOOKS',
                payload: response.data
            }))
            .catch((err) => dispatch({
                type: 'GET_BOOKS_REJECTED',
                payload: err 
            }));
    }
}

// post a book
export function postBook(book) {
    // return a function 
    return function(dispatch) {
        axios.post('/api/books', book)
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
export function deleteBook(_id) {
    return function(dispatch) {
        axios.delete(`/api/books/${_id}`)
            .then((response) => dispatch({
                type: 'DELETE_BOOK',
                payload: _id
            }))
            .catch((err) => dispatch({
                type: 'DELETE_BOOK_REJECT',
                payload: err
            }));
    }
}

// update a book
export function updateBook(book) {
    return{
        type: 'UPDATE_BOOK',
        payload: book
    }
}

// reset form buttons and messages 
// update a book
export function resetForm() {
    return{
        type: 'RESET_FORM'
    }
}