import React, {Component} from 'react';

const Footer = () =>  (
    <footer className="footer text-center" style={{marginTop: '50px'}}> 
        Copyrights &copy; {new Date().getFullYear() } || ReactUniversal ShoppingApp
    </footer>
)

export default Footer;