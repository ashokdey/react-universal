'use strict';
let env = process.env.NODE_ENV || 'development';


if (env ===  'development') {
  process.env.PORT = 3000;
  process.env.API_PORT = 3001;
  process.env.MONGODB_URI  = 'mongodb://127.0.0.1:27017/BookShop';
}
else if (env === 'test'){
  process.env.PORT = 3000;
  process.env.API_PORT = 3001;    
  process.env.MONGODB_URI  = 'mongodb://127.0.0.1:27017/BookShopTest';
}


console.log('****Working Environment is : ', env);
//console.log('****MONGO Environment is : ', process.env.MONGODB_URI);