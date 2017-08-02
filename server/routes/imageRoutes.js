'use strict';
const fs = require('fs');
const path = require('path');
const ImageRouter = require('express').Router();

ImageRouter.route('/')
    .get((req, res) => {
        // store the path to image directory
        const imageDir = path.resolve(__dirname, '../static/images');
        // read all the images in the directory 
        fs.readdir(imageDir, (err, images) => {
            if(err) {
                return console.log('**ERROR in imageRoutes:', err.message);
            }
            // create an empty array and return as response 
            const imageArray = [];
            // fill the array with the file names 
            images.forEach((imageFile) => imageArray.push({
                name: imageFile,
                nameWithAddress: `/static/images/${imageFile}`
            }));

            // return as json response all the files
            res.status(200).json(imageArray); 
        });
    });


module.exports = ImageRouter;