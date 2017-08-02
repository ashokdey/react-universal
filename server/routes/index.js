'use strict';

const APIRoutes = require('express').Router();
const BookRoutes = require('./bookRoutes.js');
const CartRoutes = require('./cartRoutes.js');
const ImageRoutes = require('./imageRoutes.js');

APIRoutes.use('/books', BookRoutes);
APIRoutes.use('/cart', CartRoutes);
APIRoutes.use('/images', ImageRoutes);

module.exports = APIRoutes;