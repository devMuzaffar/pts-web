import { MdVideoLibrary } from "react-icons/md";
import featuresList from "./featuresList";

const Landing = () => {
  return (
    <div className="bg-[#F1FCFF]">
      {/* SECTION 1 -- Landing Page */}
      <div className="flex flex-col justify-center items-center h-full pt-10 gap-10 px-4 sm:flex-row sm:gap-0 sm:pt-0 sm:px-8 sm:py-20 md:py-0 md:h-full md:px-16">
        {/* Left Text */}
        <div className="flex flex-1 flex-col gap-3 md:gap-5">
          {/* Title */}
          <div>
            {/* Small Text */}
            <div className="text-sm font-medium md:text-lg">
              <p>Anywhere Access Easy Learning</p>
            </div>

            {/* Big Text */}
            <div className="font-bold text-4xl leading-tight md:text-4xl lg:text-6xl">
              <h1>
                The Best <span className="text-primary-blue">Platform</span> For
                Enhancing Skills
              </h1>
            </div>
          </div>

          {/* Paragraph */}
          <div className="text-sm font-medium">
            <p>
              Working collaboratively to ensure every student achieves
              academically, socially, and emotionally.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-primary-blue text-white rounded-md px-6 py-3 text-sm">
              Get Started
            </button>

            <div className="flex items-center gap-1 text-gray-900 text-sm">
              <MdVideoLibrary size={18} />
              <p>Watch Video</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img className="drop-shadow-md" src="./assets/person.webp" alt="" />
        </div>
      </div>

      {/* SECTION 2 -- Bottom Feature Icons Section */}
      <div className="hidden justify-center items-center gap-5 sm:pb-6 sm:grid sm:grid-cols-2 sm:justify-between sm:px-8 sm:-mt-10 md:grid-cols-4 md:mt-0 md:px-16 md:py-14 lg:grid-cols-4">
        {featuresList.map(({ icon, text, color }, index) => (
          <div
            key={index}
            className={`rounded-full flex items-center justify-center border-[1.25px] gap-2 border-gray-300 py-2 px-3 md:gap-3 md:items-center md:py-5 md:px-6 lg:px-10 ${color}`}
          >
            {icon}
            <p className="font-bold text-sm lg:text-lg">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
