import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import bookList from "./bookList";

const OurBooks = () => {
  return (
    <div className="py-8 px-2 sm:px-8 md:px-16 flex flex-col justify-center items-center gap-10">
      {/* Text */}
      <h2 className="text-xl text-primary-blue">Our Books</h2>

      {/* Books List */}
      <div className="grid gap-10 justify-evenly w-full relative md:gap-12 sm:grid-cols-2 md:px-6 md:grid-cols-4">
        {/* Book Card */}
        {bookList.map(({ img, text }, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 rounded-lg shadow-lg flex flex-col justify-center items-center relative p-3 gap-3"
          >
            {/* New Badge */}
            <div className="absolute -top-2 left-2 bg-yellow-500 rounded-lg w-max flex justify-center items-center py-1 px-2">
              <p className="text-xs">New</p>
            </div>

            {/* Image */}
            <div className="w-56 md:w-32 lg:w-56">
              <img className="rounded-lg" src={img} alt="" />
            </div>

            {/* Text */}
            <div className="max-w-32 text-nowrap w-full text-center">
              <p className="text-xs text-slate-600 font-medium truncate">
                {text}
              </p>
            </div>
          </div>
        ))}

        {/* Left - Right Buttons */}
        <div className="hidden absolute justify-between items-center text-white w-full h-full sm:flex">
          <div className="cursor-pointer bg-gray-600 bg-opacity-50 p-1 rounded-full">
            <IoIosArrowBack />
          </div>
          <div className="cursor-pointer bg-gray-600 bg-opacity-50 p-1 rounded-full">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBooks;
