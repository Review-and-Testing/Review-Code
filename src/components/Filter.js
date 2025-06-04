import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/booksSlice';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className="filter filter--buttons">
      <button onClick={() => dispatch(setFilter('ALL'))} className="filter__button">All</button>
      <button onClick={() => dispatch(setFilter('READ'))} className="filter__button">Read</button>
      <button onClick={() => dispatch(setFilter('UNREAD'))} className="filter__button">Unread</button>
    </div>
  );
};

export default Filter;