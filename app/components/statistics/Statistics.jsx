const Statistics = () => {
  const statisticsList = [
    "USERS",
    "INSTRUCTORS",
    "STUDENTS",
    "ENROLLMENT",
    "COURSES",
  ];
  const cardListClass =
    "grid justify-center gap-3 px-6 py-3 bg-[radial-gradient(#dcfce7,white)] sm:justify-between sm:grid-cols-3 md:grid-cols-5";

  return (
    <div className="px-4 pt-5 pb-6 sm:px-8 md:px-16">
      {/* Card Box */}
      <div className={cardListClass}>
        {/* Card */}
        {statisticsList.map((item, index) => (
          <div
            key={index}
            className={`border-[1px] border-gray-100 shadow-lg rounded-lg flex flex-col justify-center items-center gap-3 py-5 w-72 sm:w-48 md:w-40 lg:w-56 ${
              index === 2 ? "bg-transparent" : "bg-white"
            }`}
          >
            <h2 className="text-lg md:text-sm lg:text-lg">{item}</h2>
            <p
              className={`text-4xl md:text-2xl lg:text-4xl ${
                index === 2 ? "font-bold" : "font-medium text-primary-blue"
              }`}
            >
              123456
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
