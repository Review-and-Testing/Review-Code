// pages/edit/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { updateBook, Book } from '../redux/booksSlice';

const EditBookPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const book = useSelector((state: RootState) =>
    state.books.books.find(b => b.id === id)
  );

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setDescription(book.description);
      setIsRead(book.isRead);
    }
  }, [book]);

  if (!book) return <p>Loading or Book not found...</p>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedBook: Book = { id: book.id, title, author, description, isRead };
    dispatch(updateBook(updatedBook));
    router.push('/');
  };

  return (
    <div className="container py-4">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          className="form-control mb-3"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <textarea
          className="form-control mb-3"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <div className="form-check mb-3">
          <input
            id="readCheckbox"
            type="checkbox"
            className="form-check-input"
            checked={isRead}
            onChange={() => setIsRead(!isRead)}
          />
          <label htmlFor="readCheckbox" className="form-check-label">
            Mark as Read
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Update Book</button>
      </form>
    </div>
  );
};

export default EditBookPage;
