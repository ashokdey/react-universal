'use strict';

const CartRouter = require('express').Router();
const Book = require('../models/bookModel');

CartRouter.route('/')
    .get((req, res) => {
        // check if there is a session set for the cart or not 
        if(typeof req.session.cart !== undefined) {
            res.status(200).json(req.session.cart);
        }
    })
    .post((req, res) => {
        // the body will always receive a cart array 
        const cart = req.body;
        // set the session 
        req.session.cart = cart;
        // save the cart in the session
        req.session.save()
            .then((data) => res.status(200).json(req.session.cart))
            .catch((err) => {
                console.log(err);
                res.status(500).json({error: 'Some error occured'});
            });
    });


module.exports = CartRouter;