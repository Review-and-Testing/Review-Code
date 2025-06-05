import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,  // Connect the books reducer to the store
  },
});

export default store;