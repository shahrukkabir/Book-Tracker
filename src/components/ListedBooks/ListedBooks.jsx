import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredData, getStoredWishList } from "../../utility/storedata";
import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const ListedBooks = () => {
  const [bookList, setBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const readBooks = getStoredData();
    const wishBooks = getStoredWishList();
    const books = allBooks.filter((book) => readBooks.includes(book.bookId));
    const wishBookList = allBooks.filter((book) =>
      wishBooks.includes(book.bookId)
    );
    setBooks(books);
    setWishList(wishBookList);
  }, []);

  return (
    <div>
      <div className="flex justify-center"></div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          {bookList &&
            bookList.map((book, index) => (
              <BookCard key={index} book={book}></BookCard>
            ))}
        </TabPanel>
        <TabPanel>
          {wishList &&
            wishList.map((book, index) => (
              <BookCard key={index} book={book}></BookCard>
            ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
