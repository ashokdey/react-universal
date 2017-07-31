'use strict';

// get books
export  function getBooks(book) {
    return{
        type: 'GET_BOOKS',
    }
}

// post a book
export  function postBook(book) {
    return{
        type: 'POST_BOOK',
        payload: book
    }
}

// delete a book
export  function deleteBook(book) {
    return{
        type: 'DELETE_BOOK',
        payload: book
    }
}

// update a book
export  function updateBook(book) {
    return{
        type: 'UPDATE_BOOK',
        payload: book
    }
}
