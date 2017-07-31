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
import Footer from 'Footer';


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
            <Footer />
        </div>
    </Provider>, 
document.getElementById('app'));