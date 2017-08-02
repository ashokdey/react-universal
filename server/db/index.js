'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
    .then(() => console.log('connected to mongoDB'))
    .catch((err) => console.log('**ERROR :', err.message));

module.exports = {mongoose};