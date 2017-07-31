// Redux Stuffs
import {createStore,applyMiddleware} from 'redux';

// Import redux-logger to clean console logging
import logger from 'redux-logger';

// Import the combined reducers
import reducers from './reducers';

// Import actions 
import {addToCart} from 'cartActions';
import {postBook, deleteBook, updateBook} from 'bookActions';

// React Stuffs
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// custom components
import BookList from 'BookList';
import Navigation from 'Navigation';


// Create the store
const store = createStore(reducers, applyMiddleware(logger));

store.subscribe(() => {
    console.log('Current state is : ', store.getState());
    // // capture the price of second book 
    // console.log('Current price of second book is : ', store.getState().books.books[1].price);    
    // // capture title of second book
    // console.log('Title of second book is : ', store.getState().books.books[1].title);    
});


// REACT Rendering here

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Navigation />
            <BookList />
        </div>
    </Provider>, 
document.getElementById('app'));


// Create and Dispatch Actions 

// Dispatching an object similar to a database record 
// In real applications, there is generally  an array of objects in the payload
// store.dispatch(postBook([{
//         _id: 1001,
//         title: 'Some Boook',
//         description: 'A great demo book',
//         price: 23.33
//     },
//     {
//         _id: 1002,
//         title: 'Some Other Boook',
//         description: 'A second great demo book',
//         price: 57.30
//     }]
// ));

// Trying CRUD in Redux with a similar dispatch Action

// Creating a book
// store.dispatch(postBook([{
//         _id: 1003,
//         title: 'Third Book',
//         description: 'Third Demo Book',
//         price: 68.85
//     }]
// ));

// // Deleting a book
// store.dispatch(deleteBook([{
//         _id: 1001
//     }]
// ));

// // Updating  a book 
// store.dispatch(updateBook([{
//         _id: 1003,
//         title: 'Updated to Fantastic Book'
//     }]
// ));

// // CART Actions

// // Add to cart
// store.dispatch(addToCart([{id: 1001}]));