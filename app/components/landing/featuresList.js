import { FaUserGraduate } from "react-icons/fa6";
import { TfiAlarmClock } from "react-icons/tfi";
import { Ri24HoursFill } from "react-icons/ri";
import { RiPresentationFill } from "react-icons/ri";

// Features List of Icon Text & Color
const featuresList = [
  {
    icon: <FaUserGraduate className="size-3 md:size-6 lg:size-8" />,
    text: "Learn Anywhere",
    color: "text-[#1DA7BC]",
  },
  {
    icon: <TfiAlarmClock className="size-3 md:size-6 lg:size-8" />,
    text: "Lifetime Access",
    color: "text-[#31A96B]",
  },
  {
    icon: <Ri24HoursFill className="size-3 md:size-6 lg:size-8" />,
    text: "24/7 Support",
    color: "text-[#C9A14A]",
  },
  {
    icon: <RiPresentationFill className="size-3 md:size-6 lg:size-8" />,
    text: "Expert Instructor",
    color: "text-[#8629EA]",
  },
];

export default featuresList;
