import { toast } from "react-toastify";

const storeName = "read-list";
const getStoredData = () => {
  const storedReadList = localStorage.getItem(storeName);

  if (storedReadList) {
    const storedListStr = JSON.parse(storedReadList);
    return storedListStr;
  } else {
    return [];
  }
};
let wish = "wish-list";
const getStoredWishList = () => {
  const storedReadList = localStorage.getItem(wish);

  if (storedReadList) {
    const storedListStr = JSON.parse(storedReadList);
    return storedListStr;
  } else {
    return [];
  }
};

const addToReadList = (id) => {
  const bookList = getStoredData();
  if (bookList.includes(id)) {
    toast("This book is already in Read list.");
  } else {
    bookList.push(id);
    localStorage.setItem(storeName, JSON.stringify(bookList));

    toast("This book is added in Read list.");
  }
};
const addToWishList = (id) => {
  const bookList = getStoredWishList();
  if (bookList.includes(id)) {
    toast("This book is already in Wish list.");
  } else {
    bookList.push(id);
    localStorage.setItem(wish, JSON.stringify(bookList));
    toast("This book is added in Wish list.");
  }
};

export { addToReadList, getStoredData, getStoredWishList, addToWishList };
