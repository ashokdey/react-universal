const mongoose = require('mongoose');

// create the schema to store Books
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        minlength: 5,
        required: true
    },
    images: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    }
});

const Book = mongoose.model(Book, bookSchema);

module.exports = Book;