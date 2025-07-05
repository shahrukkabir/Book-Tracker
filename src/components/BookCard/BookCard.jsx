import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { bookId, image, bookName, author, tags, category } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card shadow-xl p-4 border max-w-96 my-4 ">
        <div className="bg-gray-200 py-4 rounded-lg">
          <figure className="w-32 h-56 mx-auto">
            <img className="w-full rounded-lg" src={image} alt="Shoes" />
          </figure>
        </div>
        <div className="space-y-8 my-4">
          <div className="flex gap-4 ">
            {tags?.map((tag, index) => (
              <p className="bg-green-100 rounded-md px-2 py-1" key={index}>
                {tag}
              </p>
            ))}
          </div>
          <h2 className=" leading-3">{bookName}</h2>
          <p>By:{author}</p>
          <div className="border-b-2 border-dashed "></div>
          <div className="card-actions justify-between">
            <div className="badge p-3 badge-outline">{category}</div>
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
