import {combineReducers} from 'redux';

//reducers to be combined
import bookReducers from './booksReducers.js';

// combining the reducers
export default combineReducers({
    books: bookReducers
});
