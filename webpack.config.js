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
    resolve: {
        alias: {
            Book: path.resolve(__dirname, 'src/components/pages/Book.jsx'),
            BookForm: path.resolve(__dirname, 'src/components/pages/BookForm.jsx'),
            BookList: path.resolve(__dirname, 'src/components/pages/BookList.jsx'),
            Cart: path.resolve(__dirname, 'src/components/pages/Cart.jsx'),
        }
    },
    devtool: 'cheap-module-eval-source-map',
    watch: true
}