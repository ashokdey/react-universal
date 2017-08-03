// Redux Stuffs
import {createStore,applyMiddleware} from 'redux';
// Import redux-logger to clean console logging
import logger from 'redux-logger';
// import redux-thunk for delaying dispatch 
import thunk from 'redux-thunk';
// Import the combined reducers
import reducers from './reducers';
// Import actions 
import {addToCart} from 'cartActions';
import {postBook, deleteBook, updateBook} from 'bookActions';
// React Stuffs
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
/**
 * IMPORTANT: Import the routes module from ClientRoutes.jsx
 */
 import ClientRoutes from './ClientRoutes.jsx';

// create the middlewares 
const middlewares = applyMiddleware(thunk, logger);

// Create the store
// IMPORTANT: We'll pass the Initial Statefrom the server store
const initialState =  window.INITIAL_STATE;

const store = createStore(reducers, initialState, middlewares);

store.subscribe(() => {
    console.log('Current state is : ', store.getState());
    // // capture the price of second book 
    // console.log('Current price of second book is : ', store.getState().books.books[1].price);    
    // // capture title of second book
    // console.log('Title of second book is : ', store.getState().books.books[1].title);    
});

// custom cart 

const CustomCart = () => (
    <Row>
        <Col  xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
            <Cart/>
        </Col>
    </Row>
) 

// REACT Rendering here
const Routes = (
    <Provider store={store}>
        <ClientRoutes/>
    </Provider>
);

ReactDOM.render(Routes, document.getElementById('app'));