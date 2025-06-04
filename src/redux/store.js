import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

const store = configureStore({ reducer: { books: booksReducer } });

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('books', JSON.stringify(state.books.list));
});

export default store;