import { LuArrowRight } from "react-icons/lu";
import FEATURE_LIST from "./featureList";

const FeatureCards = () => {
  return (
    <div className="flex flex-col px-2 sm:px-8 md:px-16">
      {/* Top Text */}
      <div className="flex items-center pt-5 px-2 sm:pt-0 sm:px-0 md:gap-2">
        <div className="flex flex-col gap-2 px-2 sm:gap-2">
          <h2 className="text-4xl font-medium sm:text-5xl">Because</h2>
          <p className="text-3xl font-medium text-primary-blue">
            We are providing ?
          </p>
        </div>

        {/* Noodle image */}
        <div>
          <img className="w-20 md:w-26" src="./assets/noodle.png" alt="" />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid place-items-center gap-4 py-6 px-2 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
        {/* Card */}
        {FEATURE_LIST.map(({ color, icon, text, bottomText }, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 border-[1px] border-gray-400 rounded-xl shadow-sm w-full pt-7 pl-5 pb-3"
          >
            {/* Icon */}
            <div className={`w-max p-3 rounded-xl ${color}`}>
              <img className="w-10" src={icon} alt="" />
            </div>

            {/* Text with Arrow */}
            <div className="flex items-center cursor-pointer gap-1">
              <p className="text-sm font-semibold lg:text-lg">{text}</p>
              <LuArrowRight className="text-[#FFC20E]" size={22} />
            </div>

            {/* Bottom Red Text */}
            <div className="text-red-700 text-xs lg:text-sm">
              <p>{bottomText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
