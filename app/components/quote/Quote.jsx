import { FaQuoteRight } from "react-icons/fa";
import membersList from "./membersList";

const Quote = () => {
  return (
    <div className="relative py-14 px-2 sm:px-8 md:px-16 flex flex-col items-center gap-10 overflow-hidden">
      {/* Ribbon */}
      <div className="absolute top-0 right-10 w-1/4 rotate-45 opacity-30 lg:-top-10">
        <img src="./assets/ribbon.webp" alt="" />
      </div>

      {/* Icon */}
      <div>
        <FaQuoteRight style={{ transform: "scaleX(-1)" }} size={48} />
      </div>

      {/* Quote Text */}
      <div className="text-xl text-center italic font-medium w-full lg:w-2/3">
        <p>
          The other hand we denounce with righteou indg ation and dislike men
          who are so beguiled and demorali ed by the of pleasure of the moment.
          Dislike men who are so beguiled and demoraliz worlds ed by the charms
          of pleasure of the moment. Lorem ipsum dolor sit amet, piscing elit.
        </p>
      </div>

      {/* Team Members */}
      <div>
        {/* Team List */}
        <div className="grid sm:grid-cols-3">
          {/* Member */}
          {membersList.map((image, index) => (
            <div key={index} className="flex flex-col">
              {/* Info */}
              <div className="flex gap-2 items-center p-5">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src={image}
                  alt=""
                />
                <div>
                  <h2 className="text-lg font-medium">Kamal Abraham</h2>
                  <p className="text-sm">CEO, Alaska</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Line */}
        <div className="relative mx-4">
          <hr className="border-2" />
          <hr className="border-2 absolute top-0 left-0 border-gray-400 w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default Quote;
