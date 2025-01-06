const FAQ = () => {
  return (
    <div className="py-8 px-2 flex flex-col sm:px-8 md:px-16 md:py-14">
      {/* Top Text */}
      <div className="flex flex-col justify-center items-center gap-3  pb-8">
        <h2 className="text-xl font-medium">FAQ</h2>
        <h3 className="text-4xl font-semibold text-center sm:text-left sm:text-3xl md:text-4xl">
          Frequently Asked Questions
        </h3>
        <p className="text-sm text-gray-400 w-full text-center md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu et ac
          elit senectus mauris blandit tempore gestas.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="grid sm:grid-cols-2 md:gap-5">
        {/* Image */}
        <div className="flex-1  w-full sm:w-72 md:w-full">
          <img src="./assets/faq/wallpaper.png" alt="" />
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1 items-start justify-center gap-3">
          <h2 className="font-medium text-xl md:text-2xl">
            <span className="text-red-500">Download</span> Chaajao on Android{" "}
            <span className="text-red-500">and</span> iOS!
          </h2>

          <p className="text-xs w-[85%]">
            Install our application rightr now and start learning! Get your most
            reliable study partner in your pocket 24/7. Learn anytime and
            anywhere!
          </p>

          <div className="flex flex-wrap gap-3">
            <img
              className="w-24 md:w-32"
              src="./assets/faq/google.svg"
              alt=""
            />
            <img className="w-24 md:w-32" src="./assets/faq/apple.svg" alt="" />
            <img
              className="w-24 md:w-32"
              src="./assets/faq/website.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
