'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true }, () => console.log('connected to mongoDB'));

module.exports = {mongoose};