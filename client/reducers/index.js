import {combineReducers} from 'redux';

//reducers to be combined
import bookReducers from './bookReducers';
import cartReducers from './cartReducers';

// combining the reducers
export default combineReducers({
  books: bookReducers,
  cart: cartReducers
});
