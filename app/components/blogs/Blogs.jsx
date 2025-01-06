import { LuCalendar } from "react-icons/lu";

const Blogs = () => {
  const blogImages = [
    "./assets/blogs/1.avif",
    "./assets/blogs/2.avif",
    "./assets/blogs/3.avif",
  ];

  return (
    <div className="pt-14 pb-8 px-2 flex flex-col justify-center items-center gap-7 md:pb-0 sm:px-8 md:px-16">
      {/* Top Text */}
      <div className="flex flex-col justify-center items-center gap-1">
        <h2 className="text-xl font-medium">Our Blog</h2>
        <h3 className="text-4xl font-semibold">Our New Articles</h3>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-5 sm:grid-cols-2 md:px-8 md:grid-cols-3 lg:px-24">
        {/* Blog Card */}
        {blogImages.map((img, index) => (
          <div
            key={index}
            className={`shadow-sm rounded-lg flex flex-col w-80 p-6 gap-1 md:w-full lg:w-80 ${
              index === 1
                ? "border-primary-blue border-2"
                : "border-zinc-200 border-[1px]"
            }`}
          >
            <h2 className="font-semibold text-lg text-center">
              How to Make Your UX Design Portfolio Stand Out
            </h2>
            <hr
              className={`border-[1px] ${
                index === 1 ? "border-primary-blue" : "border-zinc-300"
              }`}
            />
            <div className="flex text-zinc-400 justify-evenly items-center pb-3 pt-1">
              <div className="flex items-center gap-1">
                <LuCalendar size={14} />
                <p className="text-xs">11.09.2016,</p>
              </div>
              <p className="text-xs">By Mark Chapman</p>
            </div>
            <div>
              <img className="rounded-md" src={img} alt="" />
            </div>
            <button
              className={`w-full py-1 border-[1px] border-zinc-200 text-zinc-700 text-sm rounded-md ${
                index === 1 ? "bg-primary-blue" : "bg-white"
              }`}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Dot List */}
      <div className="flex justify-center items-center gap-1 cursor-pointer sm:hidden md:flex">
        <span className="rounded-full bg-gray-300 w-3 h-3" />
        <span className="rounded-full bg-primary-blue w-3 h-3" />
        <span className="rounded-full bg-gray-300 w-3 h-3" />
        <span className="rounded-full bg-gray-300 w-3 h-3" />
        <span className="rounded-full bg-gray-300 w-3 h-3" />
      </div>
    </div>
  );
};

export default Blogs;
