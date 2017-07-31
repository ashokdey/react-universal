import React, {Component} from 'react';
import Navigation from 'Navigation';
import Footer from 'Footer';

const Main = (props) => (
    <div>
        <Navigation />
        {props.children}
        <Footer />
    </div>
);

export default Main;