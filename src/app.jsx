import {createStore,applyMiddleware} from 'redux';

//  import redux-logger
import logger from 'redux-logger';

// Import the combined reducers
import reducers from './reducers';

// import actions 
import {addToCart} from './actions/cartActions';
import {postBook, deleteBook, updateBook} from './actions/bookActions';


// STEP 1 : Create the store
const store = createStore(reducers, applyMiddleware(logger));

store.subscribe(() => {
    console.log('Current state is : ', store.getState());
    // capture the price of second book 
    console.log('Current price of second book is : ', store.getState().books.books[1].price);    
    // capture title of second book
    console.log('Title of second book is : ', store.getState().books.books[1].title);    
});

//  STEP 2 : Create and Dispatch Actions 

// Dispatching an object similar to a database record 
// In real applications, there is generally  an array of objects in the payload
store.dispatch(postBook([{
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
));

// Trying CRUD in Redux with a similar dispatch Action

// Creating a book
store.dispatch(postBook([{
        id: 1003,
        title: 'Third Book',
        description: 'Third Demo Book',
        price: 68.85
    }]
));

// Deleting a book
store.dispatch(deleteBook([{
        id: 1001
    }]
));

// Updating  a book 
store.dispatch(updateBook([{
        id: 1003,
        title: 'Updated to Fantastic Book'
    }]
));

// CART Actions

// Add to cart
store.dispatch(addToCart([{id: 1001}]));