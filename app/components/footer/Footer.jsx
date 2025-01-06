import { LiaFacebookF, LiaTwitter } from "react-icons/lia";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const iconsList = [
    <LiaFacebookF key={"facebook"} size={18} />,
    <LiaTwitter key={"twitter"} size={18} />,
    <AiFillInstagram key={"instagram"} size={18} />,
    <FaLinkedinIn key={"linkedin"} size={18} />,
  ];

  return (
    <div>
      {/* Footer */}
      <div className="py-8 px-2 sm:px-8 md:px-16 bg-green-100 shadow-sm border-b-2 justify-center grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:py-24">
        
        {/* Social section */}
        <div className="flex flex-col gap-2">
          <img className="w-32 py-1" src="./assets/logo-green.png" alt="" />
          <p className="text-sm text-slate-500 w-full md:w-64">
            Practical-based learning platform to enhance skills
          </p>
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex gap-3">
            {iconsList.map((icon, index) => (
              <div
                key={index}
                className="bg-transparent p-1 rounded-full border-2 border-green-600 text-green-600 cursor-pointer"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Resources section */}
        <div className="flex flex-col justify-start gap-6">
          <h2 className="text-xl font-semibold text-slate-700">Resources</h2>
          <ul className="flex flex-col text-slate-500 font-medium gap-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Our Blog</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Contact section */}
        <div className="flex flex-col justify-evenly gap-6">
          <h2 className="text-xl font-semibold text-slate-700">Contact</h2>
          <div className="flex items-start gap-2 h-full w-full">
            <div className="text-slate-500 flex flex-col items-center gap-4 pb-[3px]">
              <FiPhone />
              <FiPhone />
              <FiMail />
              <FiMapPin />
            </div>
            <ul className="flex flex-col gap-3 text-slate-500 font-medium text-sm">
              <li>+0477 85X6 852</li>
              <li>+0477 85X6 825</li>
              <li>info@themeuser.com</li>
              <li>123, New Lenox, Chicago</li>
            </ul>
          </div>
        </div>

        {/* Register Now section */}
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-green-500 font-semibold text-2xl">
            Become an Instructor
          </h2>
          <p className="text-sm text-slate-500 w-full">
            We only work with the best companies around the globe
          </p>
          <form className="flex flex-wrap items-center gap-1">
            <input
              className="px-2 py-2 w-1/2 rounded-md bg-transparent border-2 text-xs border-zinc-300 text-zinc-400 outline-none placeholder:text-zinc-400"
              placeholder="Enter Your Email"
              type="text"
            />
            <button className="px-4 py-2 rounded-md bg-green-500 border-2 border-green-500 text-xs text-white">
              Register now
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="py-6 px-2 sm:px-8 md:px-16 flex flex-wrap justify-between text-sm text-gray-600 md:flex-nowrap">
        <div className="w-full text-center md:text-left">
          <p className="text-sm">
            &copy; 2023 All rights reserved. Terms of Use and Privacy Policy
          </p>
        </div>

        <div className="flex flex-wrap gap-3 cursor-pointer w-full justify-center items-center md:justify-end text-sm">
          <p>Privacy</p>
          <p className="hidden sm:block">|</p>
          <p>Terms</p>
          <p className="hidden sm:block">|</p>
          <p>Sitemap</p>
          <p className="hidden sm:block">|</p>
          <p>Purchase</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
