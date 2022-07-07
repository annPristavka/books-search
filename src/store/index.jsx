import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booksReducer } from '../reducer/bookReduce';
import { bookReducer } from '../reducer/getBookReduce';
import { loadReducer } from '../reducer/loadingReducer';

const rootReduce = combineReducers({
  books: booksReducer,
  book: bookReducer,
  load: loadReducer,
});

const store = configureStore({
  reducer: rootReduce,
});

export default store;
