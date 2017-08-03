'use strict';

// require axios to make api calls 
import axios from 'axios';

function handleRender(req, res){
    axios.get('http://localhost:3001/books')
        .then((response) => {
            const myHtml = JSON.stringify(response.data);
            res.render('index', {myHtml});
        })
        .catch((err) => console.error('INITIAL_SERVER_SIDE_RENDERING_ERROR: ', err));
}

module.exports = handleRender;