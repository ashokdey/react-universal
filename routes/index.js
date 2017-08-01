'use strict';

const Router = require('express').Router();
const Book = require('../models/bookModel');

Router.route('/books')
    .post((req, res) => {
        let book = req.body;
        console.log(book);
        // save the book in DB
        new Book(book).save()
            .then((data) => res.status(200).send(data))
            .catch((err) => console.log(err));
    });

module.exports = Router;