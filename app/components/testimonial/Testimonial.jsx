import { BiSolidQuoteLeft } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import {
  LiaFacebook,
  LiaWhatsapp,
  LiaLinkedin,
  LiaInstagram,
} from "react-icons/lia";

const Testimonial = () => {

  // Background Image for Card
  const bgImg = "url('./assets/testimonial/background.png')";
  const bgStyle = {
    backgroundImage: bgImg,
  }

  return (
    <div className="py-14 px-2 flex flex-col gap-7 sm:px-8 md:px-16">
      {/* Text */}
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-medium">Our Students Review</h3>
        <h2 className="text-3xl font-bold text-slate-800">
          Stories of <span className="text-green-600">Our Successful</span>{" "}
          Students
        </h2>
        <p className="text-sm text-slate-500">
          A learning platform based on practical knowledge with best & mentors.
        </p>
      </div>

      {/* Testimonial List */}
      <div className="w-full grid justify-center gap-10 sm:grid-cols-2">
        {/* Testimonial Card */}
        {[1, 2].map((img, index) => (
          <div
            key={index}
            className="bg-cover bg-bottom bg-no-repeat rounded-lg drop-shadow-sm flex flex-wrap justify-center p-6 md:shadow-2xl md:flex-nowrap"
            style={bgStyle}
          >
            {/* Left */}
            {/* Image & Icon */}
            <div className="flex justify-between w-full md:w-4/5">
              <img
                className="w-48 object-contain"
                src={`./assets/testimonial/${img}.png`}
                alt=""
              />
              <BiSolidQuoteLeft className="text-red-100" size={48} />
            </div>

            {/* Right */}
            {/* Rating & Texts */}
            <div className="text-gray-500 flex flex-col justify-between py-5 w-full">
              {/* Starts & Review */}
              <div className="flex flex-col gap-1">
                <div className="text-yellow-600 flex gap-2">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
                <div className="w-full">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vitae, aliquet duis pellentesque. pretium mattis orci.
                    Vestibulum nunc diam tellus
                  </p>
                </div>
              </div>

              {/* Details & Social Icons */}
              <div>
                <h2 className="font-semibold text-2xl text-slate-700">
                  Marvin McKinney
                </h2>
                <p className="text-sm">UI/UX Designer</p>
                <div className="flex gap-1 pt-2">
                  <LiaFacebook />
                  <LiaLinkedin />
                  <LiaWhatsapp />
                  <LiaInstagram />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
