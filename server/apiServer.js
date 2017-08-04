// require custom configuration file 
const config = require('./config');

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// usign connect-mongo to save express sessions in mongoDB
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// define the port 
const PORT = process.env.API_PORT || 3001;

// require the mongodb connection here 
const {mongoose} = require('./db');

// require the routes file 
const APIRoutes = require('./routes');

// create the express app instance 
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//middleware to capture user sessions and save in mongoDB
app.use(session({
  secret: 'anyrandomsecretstring',
  saveUninitialized: false,
  resave: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 2},
  store: new MongoStore({mongooseConnection: mongoose.connection, ttl: 2 * 24 * 60 * 60})
  // mongooseConnection is the DB connection variable, mongoose in our case 
  // ttl is time to leave which is 2 days expressed in terms of seconds 
}))

// use the custom routes 
app.use('/', APIRoutes);

app.listen(PORT, () => console.log('API running at http://localhost:', PORT));
