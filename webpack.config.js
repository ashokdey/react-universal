const  path = require('path');
const  webpack = require('webpack');

module.exports = {
  entry: './client/app.jsx',
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
  // PLUGINS BELOW REDUCE BUNDLE SIZE FOR PRODUCTION
  plugins: [
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false
    }), //minify
    new webpack.optimize.AggressiveMergingPlugin()//Merging chunks
  ],
  resolve: {
    alias: {
      // reducers here 
      bookReducers: path.resolve(__dirname, 'client/reducers/bookReducers.js'),
      cartReducers: path.resolve(__dirname, 'client/reducers/cartReducers.js'),

      // actions here 
      bookActions: path.resolve(__dirname, 'client/actions/bookActions.js'),            
      cartActions: path.resolve(__dirname, 'client/actions/cartActions.js'),            

      // Components here          
      Main: path.resolve(__dirname, 'client/components/Main.jsx'),            
      Book: path.resolve(__dirname, 'client/components/pages/Book.jsx'),
      BookForm: path.resolve(__dirname, 'client/components/pages/BookForm.jsx'),
      BookList: path.resolve(__dirname, 'client/components/pages/BookList.jsx'),
      Cart: path.resolve(__dirname, 'client/components/pages/Cart.jsx'),
      About: path.resolve(__dirname, 'client/components/pages/About.jsx'),
      Contact: path.resolve(__dirname, 'client/components/pages/Contact.jsx'),
      Navigation: path.resolve(__dirname, 'client/components/Navigation.jsx'),
      Footer: path.resolve(__dirname, 'client/components/Footer.jsx'),
      Slider: path.resolve(__dirname, 'client/components/Slider.jsx'),            
    }
  }
}