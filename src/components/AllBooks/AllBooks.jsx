import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./data/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  const handleSort = () => {
    const sortedList = [...books].sort((a, b) => a.totalPages - b.totalPages);
    setBooks(sortedList);
  };

  return (
    <div className="my-8">
      <div className="flex flex-row-reverse justify-around items-center">
        <button
          onClick={handleSort}
          className="btn btn-ghost bg-blue-600 font-semibold text-white hover:bg-blue-500"
        >
          Sort By Pages
        </button>
        <h1 className="font-playfair text-4xl text-center">Books</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
