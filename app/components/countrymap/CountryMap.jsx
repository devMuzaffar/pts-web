const CountryMap = () => {
  return (
    <div className="py-8 px-2 gap-10 sm:px-8 md:px-16 grid relative">
      {/* Top Text */}
      <div className="text-2xl font-semibold px-2 top-20 sm:px-16 md:absolute lg:px-32 lg:top-32 lg:left-2">
        <h2 className="text-primary-blue text-center sm:text-left">
          All Over Pakistan
        </h2>
        <p className="text-center sm:text-left">
          We covers all province text books
        </p>
      </div>

      {/* Image */}
      <div className="flex flex-1 justify-end px-2">
        <img className=" md:w-4/5" src="./assets/Pakistan-map.png" alt="" />
      </div>
    </div>
  );
};

export default CountryMap;
