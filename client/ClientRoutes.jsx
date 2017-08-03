// React Stuffs
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// custom components
import Main from './components/Main.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import BookList from './components/pages/BookList.jsx';
import BookForm from './components/pages/BookForm.jsx';
import Cart from './components/pages/Cart.jsx';

// styled components from react-bootstrap
import {Row, Col} from 'react-bootstrap';

// custom cart 
const CustomCart = () => (
    <Row>
        <Col  xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
            <Cart/>
        </Col>
    </Row>
) 

// REACT Rendering here
const ClientRoutes =  (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={BookList} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/admin" component={BookForm} />
            <Route path="/cart" component={CustomCart} />
        </Route>
    </Router>
);

export default ClientRoutes;