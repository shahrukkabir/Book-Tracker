import bannerImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className=" bg-base-200 my-4 rounded-lg">
      <div className="flex justify-around p-8 items-center flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-4 font-playfair text-center md:text-start">
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn bg-green-500 text-white mx-auto">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
