import { useLoaderData, useParams } from "react-router-dom";
import { addToReadList, addToWishList } from "../../utility/storedata";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const selectedBook = data.find((da) => da.bookId === id);
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = selectedBook;

  const handleAddToReadList = (id) => {
    addToReadList(id);
  };
  const handleAddToWishList = (id) => {
    addToWishList(id);
  };

  return (
    <div className="my-8 mx-8 md:mx-0 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className=" h-[32rem] bg-gray-200 flex justify-center items-center rounded-lg">
        <img className="h-5/6 rounded-lg" src={image} alt="" />
      </div>
      <div className="h-[32rem] my-4 md:my-0 overflow-scroll ">
        <h1 className="font-playfair text-5xl font-bold">{bookName}</h1>
        <h2 className="mb-4 font-semibold">By : {author} </h2>
        <hr />
        <h3 className="mb-4 font-semibold">{category}</h3>
        <hr />
        <p className="text-justify font-semibold text-xs">
          <span className="text-xl font-semibold">Review:</span> {review}
        </p>
        <div className="flex gap-4 my-5">
          {tags.map((tag, index) => (
            <p className="bg-green-100 px-2 py-[6px] rounded-lg" key={index}>
              #{tag}
            </p>
          ))}
        </div>
        <hr />
        <div className="flex gap-12 my-8">
          <div className="flex flex-col">
            <small>Number of Pages:</small>
            <small>Publisher:</small>
            <small>Year of Publishing:</small>
            <small>Rating: </small>
          </div>
          <div className="flex flex-col font-bold">
            <small>{totalPages}</small>
            <small>{publisher}</small>
            <small>{yearOfPublishing}</small>
            <small>{rating}</small>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => handleAddToReadList(id)}
            className="border px-4 py-2 rounded-lg bg-slate-50"
          >
            Add to Read
          </button>
          <button
            onClick={() => handleAddToWishList(id)}
            className="border px-4 py-2 rounded-lg bg-blue-400 text-white"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
