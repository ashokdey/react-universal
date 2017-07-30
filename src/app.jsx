import {createStore} from 'redux';

// STEP 3 : Define Reducers 
const reducer = (state = {books: []}, action) => {
    
    switch(action.type) {
        case 'POST_BOOK':  
            // add the new   book in the state.  
            // Never  use push()methodbecause it is mutable
            // we shouldnevermutate the state in redux 
            // let books = state.books.concat(action.payload);
            // we can also use the spread operator which creates copies
            return {books: [...state.books, ...action.payload]};
        break;

        case 'DELETE_BOOK':
            // creating a copy  of the current book array 
            const bookToDelete = [...state.books];
            // determine the index of the book to be deleted
            const bookIndex = bookToDelete.findIndex((book) => book.id === action.payload.id);
            // use slice to remove the book at the specified index
            return {books:[...bookToDelete.slice(0, bookIndex), ...bookToDelete.slice(bookIndex + 1)]} 

        break;
        
        case 'UPDATE_BOOK':
            // makecopy of books array 
            const bookToUpdate = [...state.books];
            //determine the index of book to be updated
            const bookIndexToUpdate = bookToUpdate.findIndex((book) => book.id === action.payload.id);
            // create a  new book object with the contents to update 
            const newBook = {
                ...bookToUpdate[bookIndexToUpdate],
                title: action.payload.title
            }

            //console log the  book just to see how it looks like 
            console.log(newBook);

            // now use slice to remove the  book at the given index 
            // replace with the new book object 
            // concatenatewith the  rest of the books  in the  state

            return {books: [...bookToUpdate.slice(0, bookIndexToUpdate), newBook, ...bookToUpdate.slice(bookIndexToUpdate + 1)]}
        break;
    }
    return state;
}

// STEP 1 : Create the store
const store = createStore(reducer);

store.subscribe(() => {
    console.log('Current state is : ', store.getState());
    // capture the price of second book 
    console.log('Current price of second book is : ', store.getState().books[1].price);    
    // capture title of second book
    console.log('Current price of second book is : ', store.getState().books[1].title);    
});

//  STEP 2 : Create and Dispatch Actions 

// Dispatching an object similar to a database record 
// In real applications, there is generally  an array of objects in the payload
store.dispatch({
    type: 'POST_BOOK',
    payload: [{
        id: 1001,
        title: 'Some Boook',
        description: 'A great demo book',
        price: 33.33
    },
    {
        id: 1002,
        title: 'Some Other Boook',
        description: 'A second great demo book',
        price: 13.33
    }]
});

// Trying CRUD in Redux with a similar dispatch Action

// Creating a book
store.dispatch({
    type: 'POST_BOOK',
    payload: [{
        id: 1003,
        title: 'Third Book',
        description: 'Third Demo Book',
        price: 68.85
    }]
});

// Deleting a book
store.dispatch({
    type: 'DELETE_BOOK',
    payload: {
        id: 1001
    }
});

// Updating  a book 
store.dispatch({
    type: 'UPDATE_BOOK',
    payload: {
        id: 1003,
        title: 'Updated to Fantastic Book'
    }
});