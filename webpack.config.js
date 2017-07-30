const  path = require('path');
const  webpack = require('webpack');

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename:'bundle.js',
        path:path.resolve(__dirname, 'public/static/')
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ] 
    },
    devtool: 'cheap-module-eval-source-map',
    watch: true
}