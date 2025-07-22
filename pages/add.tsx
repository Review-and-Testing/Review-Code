import BookForm from '../components/BookForm';

export default function AddPage() {
  return (
    <div className="container py-4">
      <h2 className="mb-4">➕ Add Book</h2>
      <BookForm />
    </div>
  );
}
