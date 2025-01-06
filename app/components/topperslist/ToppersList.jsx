const ToppersList = () => {
  return (
    <div className="flex flex-col py-8 px-2 gap-10 sm:px-8 md:px-16">
      {/* Top Text */}
      <div className="text-4xl font-semibold px-2 sm:px-0">
        <h2>Our Toppers of MDCAT 2024-25</h2>
      </div>

      {/* Toppers Section */}
      <div className="bg-primary-blue flex rounded-[50px] w-full py-4">
        {/* Trophy Image */}
        <div className="hidden items-center justify-center md:flex md:pl-8">
          <img className="w-40" src="./assets/champions.webp" alt="" />
          <img
            className="w-32 self-end -rotate-12 lg:w-36"
            src="./assets/congrats.png"
            alt=""
          />
        </div>

        {/* Toppers List */}
        <div className="flex-1 grid gap-4 justify-center items-center w-full py-2 sm:grid-cols-3 md:pr-8 md:justify-evenly md:gap-18">
          {[1, 2, 3].map((n, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 text-white font-medium sm:gap-2"
            >
              <img
                className="w-56 h-56 object-contain sm:w-40 sm:h-40 lg:w-48 lg:h-48"
                src={`./assets/avatar/${n}.png`}
                alt=""
              />
              <p className="text-3xl sm:text-xl md:text-2xl">Name</p>
              <p className="text-4xl sm:text-2xl md:text-2xl lg:text-3xl">
                MDCAT Score
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToppersList;
