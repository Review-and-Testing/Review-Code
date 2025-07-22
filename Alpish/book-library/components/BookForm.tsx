import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [isRead, setIsRead] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addBook({
      id: uuidv4(),
      title,
      author,
      description,
      isRead
    }));

    router.push('/');
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      </div>
      <div className="mb-3">
        <input className="form-control" type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" required />
      </div>
      <div className="mb-3">
        <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" checked={isRead} onChange={() => setIsRead(!isRead)} />
        <label className="form-check-label">Mark as Read</label>
      </div>
      <button className="btn btn-primary" type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
