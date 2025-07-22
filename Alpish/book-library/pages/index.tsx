import { useState } from 'react';
import Link from 'next/link';
import BookList from '../components/BookList';

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');

  return (
    <div className="container py-4">
      <h1 className="mb-4">📚 Book Library</h1>
      <Link href="/add" className="btn btn-success mb-3">+ Add New Book</Link>
      <div className="btn-group mb-4 ms-2">
        <button onClick={() => setFilter('all')} className="btn btn-outline-primary">All</button>
        <button onClick={() => setFilter('read')} className="btn btn-outline-success">Read</button>
        <button onClick={() => setFilter('unread')} className="btn btn-outline-warning">Unread</button>
      </div>
      <BookList filter={filter} />
    </div>
  );
}
