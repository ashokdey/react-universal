'use strict';

const Router = require('express').Router();
const Book = require('../models/bookModel');

Router.route('/')
    .get((req, res) => {
        Book.find({})
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err))
    })
    .post((req, res) => {
        let book = req.body;
        console.log(book);
        // save the book in DB
        new Book(book).save()
            .then((data) => res.status(200).json(data))
            .catch((err) => console.log(err));
    });

Router.route('/:id')
    .delete((req, res) => {
        let _id = req.params.id;
        console.log(_id);

        Book.findByIdAndRemove({_id })
            .then((data) => res.status(204).json(data))
            .catch((err) => res.status(500).json(err));
    });

module.exports = Router;