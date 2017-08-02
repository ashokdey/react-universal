'use strict';

// Book reducers

export default function bookReducers (state = {books: []}, action) {
    
    switch(action.type) {
        case 'GET_BOOKS':
            return {...state, books: [...action.payload]}
        break;

        case 'POST_BOOK':  
            /**
             * add the new book in the state.  
             * Never use push()methodbecause it is mutable
             * We should never mutate the state in redux 
             * let books = state.books.concat(action.payload);
             * We can also use the spread operator which creates copies
             */
            return {books: [...state.books, ...action.payload]};
        break;

        case 'DELETE_BOOK':
            // creating a copy  of the current book array 
            const bookToDelete = [...state.books];
            // determine the index of the book to be deleted
            const bookIndex = bookToDelete.findIndex((book) => book._id === action.payload);
            // use slice to remove the book at the specified index
            return {books:[...bookToDelete.slice(0, bookIndex), ...bookToDelete.slice(bookIndex + 1)]} 

        break;
        
        case 'UPDATE_BOOK':
            // makecopy of books array 
            const bookToUpdate = [...state.books];
            //determine the index of book to be updated
            const bookIndexToUpdate = bookToUpdate.findIndex((book) => book._id === action.payload._id);
            // create a  new book object with the contents to update 
            const newBook = {
                ...bookToUpdate[bookIndexToUpdate],
                title: action.payload.title
            }

            //console log the  book just to see how it looks like 
            console.log(newBook);

            /**
             * now use slice to remove the  book at the given index 
             * replace with the new book object 
             * concatenatewith the  rest of the books  in the  state
             */

            return {books: [...bookToUpdate.slice(0, bookIndexToUpdate), newBook, ...bookToUpdate.slice(bookIndexToUpdate + 1)]}
        break;
    }
    return state;
}