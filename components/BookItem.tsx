import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggleReadStatus, Book } from '../redux/booksSlice';

const BookItem = ({ book }: { book: Book }) => {
  const dispatch = useDispatch();

  return (
    <div className="card mb-3 p-3">
      <h5>{book.title}</h5>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <div className="d-flex gap-2">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => dispatch(toggleReadStatus(book.id))}
        >
          Mark as {book.isRead ? 'Unread' : 'Read'}
        </button>
        <Link href={`/${book.id}`} className="btn btn-sm btn-outline-primary">
        Edit
        </Link>
      </div>
    </div>
  );
};

export default BookItem;
