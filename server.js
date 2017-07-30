'use strict';

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

// create our app
const app = express();

// middleware to serve static files 
app.use(express.static('public'));

// serve index.html at the root route 
app.get('/', (req, res) => {
    res.status(200).sendfile(path.resolve(__dirname, 'public', 'index.html'));
});


// listen to port 
app.listen(PORT,() => {
    console.log('App is running at: http://localhost:' + PORT);
})
