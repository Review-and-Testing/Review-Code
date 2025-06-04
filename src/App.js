import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Filter from './components/Filter';

const App = () => (
  <div className="app">
    <h1 className="app__header">📚 Book Library</h1>
    <BookForm />
    <Filter />
    <BookList />
  </div>
);

export default App;