import {createStore} from 'redux';

// Import the combined reducers
import reducers from './reducers';


// STEP 1 : Create the store
const store = createStore(reducers);

store.subscribe(() => {
    console.log('Current state is : ', store.getState());
    // capture the price of second book 
    console.log('Current price of second book is : ', store.getState().books.books[1].price);    
    // capture title of second book
    console.log('Current price of second book is : ', store.getState().books.books[1].title);    
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