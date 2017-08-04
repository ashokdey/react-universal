'use strict';

const BookRouter = require('express').Router();
const Book = require('../models/bookModel');

BookRouter.route('/')
  .get((req, res) => {
    Book.find({})
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err))
  })
  .post((req, res) => {
    // the body will always receive an array of books 
    let bookArray = req.body;
    console.log(bookArray);
    // save the book in DB
    Book.create(bookArray)
      .then((data) => res.status(200).json(data))
      .catch((err) => console.log(err));
  });

BookRouter.route('/:id')
  .put((req, res) => {
    let book = req.body;
    let query = req.params.id;

    // TODO: conditional update
    // for now going with direct update
    // $set will create new field if not exists

    const updatedBook = {
      '$set' : {
        title: book.title,
        description: book.description,
        image: book.image,
        price: book.price
      }
    };

    // set option in the findOneAndupdate() method so that it returns the 
    // updated book as response 
    const options = {new : true};

    Book.findOneAndUpdate(query, updatedBook, options)
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(500).json(err));
  })
  .delete((req, res) => {
    let _id = req.params.id;
    console.log(_id);

    Book.findByIdAndRemove({_id })
      .then((data) => res.status(204).json(data))
      .catch((err) => res.status(500).json(err));
  });

module.exports = BookRouter;