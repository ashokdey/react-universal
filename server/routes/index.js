'use strict';

const APIRoutes = require('express').Router();
const BookRoutes = require('./bookRoutes.js');
const CartRoutes = require('./cartRoutes.js');

APIRoutes.use('/books', BookRoutes);
APIRoutes.use('/cart', CartRoutes);

module.exports = APIRoutes;