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
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// custom components
import Main from 'Main';
import About from 'About';
import Contact from 'Contact';
import BookList from 'BookList';
import BookForm from 'BookForm';
import Cart from 'Cart';

// styled components from react-bootstrap
import {Row,  Col} from 'react-bootstrap';

// Create the store
const store = createStore(reducers, applyMiddleware(thunk, logger));

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
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BookList} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/admin" component={BookForm} />
                <Route path="/cart" component={CustomCart} />
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(Routes, document.getElementById('app'));