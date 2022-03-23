import { useEffect, useState } from 'react';
import Book from '../../components/book/Book';
import { getBookById } from '../../services/books';
import { Link, useParams } from 'react-router-dom';

function BookDetail() {
  const id = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id.id).then(({ data }) => setBook(data));
  }, [id.id]);

  if (!book) return <h3>Loading book...</h3>;

  return (
    <>
      <Link to="/books">
        <p>Return to catalogue</p>
      </Link>
      <Book book={book} showDetail />
    </>
  );
}

export default BookDetail;
