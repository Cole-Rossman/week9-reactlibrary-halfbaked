import { useEffect, useState } from 'react';
import Book from '../../components/book/Book';
import { getBooks } from '../../services/books';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getBooks();
      setBooks(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading books...</h1>;

  return (
    <>
      <ul className="book-list" aria-label="book list">
        {books.map((book) => (
          <Link key={book.book_id} to={`/books/${book.book_id}`} >
            <li key={book.book_id}>
              <Book book={book} />
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}


export default BookList;
