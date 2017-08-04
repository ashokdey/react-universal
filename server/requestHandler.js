'use strict';

// require axios to make api calls 
import axios from 'axios';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import reducers from '../client/reducers';
import ClientRoutes from '../client/ClientRoutes.jsx';

function handleRender(req, res){
  axios.get('http://localhost:3001/books')
    .then((response) => {
      // const myHtml = JSON.stringify(response.data);
      // res.render('index', {myHtml});

      // STEP - 1 : Create a Redux Store on the Server 
      const store = createStore(reducers, {'books': {'books': response.data}});

      // STEP 2 : Get iniital state from the store 
      const initalState = JSON.stringify(store.getState()).replace(/<\/script/g,'<\\/script').replace(/<!--/g, '<\\!--');;

      // STEP 3 : implemet react-router onthe server to intercept client request and define what to do with them 

      const Routes = {
        routes: ClientRoutes,
        location: req.url
      }

      match(Routes, function(err, redirect, props){
        if(err) {
          res.status(500).send('Error fullfilling the request');
        }
        else if(redirect) {
          res.status(302, redirect.pathname, redirect.search);
        }
        else if(props) {
          const reactComponent = renderToString(
            <Provider store={store}>
              <RouterContext {...props} />
            </Provider>
          );
          res.status(200).render('index', {reactComponent, initalState});
        }
        else {
          res.status(404).send('Page not found');
        }
      });


    })
    .catch((err) => console.error('INITIAL_SERVER_SIDE_RENDERING_ERROR: ', err));
}

module.exports = handleRender;