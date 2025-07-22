import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import BookItem from './BookItem';

const BookList = ({ filter }: { filter: 'all' | 'read' | 'unread' }) => {
  const books = useSelector((state: RootState) => state.books.books);

  const filtered = books.filter(book =>
    filter === 'all' ? true :
    filter === 'read' ? book.isRead : !book.isRead
  );

  return (
    <div className="mt-4">
      {filtered.map(book => <BookItem key={book.id} book={book} />)}
    </div>
  );
};

export default BookList;
