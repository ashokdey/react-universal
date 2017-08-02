// require custom configuration file 
const config = require('./config');

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = process.env.API_PORT || 3001;

// require the mongodb connection here 
const {mongoose} = require('./db');

// require the routes file 
const BookRoutes = require('./routes');

// create the express app instance 
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// use the custom routes 
app.use('/books', BookRoutes);

app.listen(PORT, () => console.log('API running at http://localhost:', PORT));
