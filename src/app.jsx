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
import {BrowserRouter as Router, Route, } from 'react-router-dom';

// custom components
import Main from 'Main';
import Navigation from 'Navigation';
import Footer from 'Footer';
import About from 'About';
import Contact from 'Contact';
import BookList from 'BookList';
import BookForm from 'BookForm';
import Cart from 'Cart';

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
            <Router>
                <div>
                    <Route path="/" component={Navigation}/>
                    <Route exact path="/" component={BookList}/>                    
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/admin" component={BookForm}/>
                    <Route path="/" component={Footer}/>                    
                </div>
            </Router>
        </div>
    </Provider>, 
document.getElementById('app'));