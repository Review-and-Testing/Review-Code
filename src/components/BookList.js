import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBook, toggleReadStatus } from '../redux/booksSlice';

const BookList = () => {
  const { list, filter } = useSelector(state => state.books);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editAuthor, setEditAuthor] = useState('');

  const filteredBooks = list.filter(book => {
    if (filter === 'ALL') return true;
    return filter === 'READ' ? book.read : !book.read;
  });

  const startEditing = (book) => {
    setEditingId(book.id);
    setEditTitle(book.title);
    setEditAuthor(book.author);
  };

  const saveUpdate = (id) => {
    dispatch(updateBook({ id, title: editTitle, author: editAuthor }));
    setEditingId(null);
  };

  return (
    <div className="book-list">
      {filteredBooks.map(book => (
        <div key={book.id} className="book-list__item">
          {editingId === book.id ? (
            <>
              <input value={editTitle} onChange={e => setEditTitle(e.target.value)} className="book-list__input" />
              <input value={editAuthor} onChange={e => setEditAuthor(e.target.value)} className="book-list__input" />
              <button onClick={() => saveUpdate(book.id)} className="book-list__button">Save</button>
            </>
          ) : (
            <>
              <div className="book-list__info">
                <strong>{book.title}</strong> by {book.author} <span className={`book-list__status book-list__status--${book.read ? 'read' : 'unread'}`}>[{book.read ? 'Read' : 'Unread'}]</span>
              </div>
              <div className="book-list__actions">
                <button onClick={() => dispatch(toggleReadStatus(book.id))} className="book-list__button">Toggle Read</button>
                <button onClick={() => startEditing(book)} className="book-list__button">Edit</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;