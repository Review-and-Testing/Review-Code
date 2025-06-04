import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({ title, author }));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form form--book">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="form__input" />
      <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" className="form__input" />
      <button type="submit" className="form__button">Add Book</button>
    </form>
  );
};

export default BookForm;