"use client";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { capitalize } from "@/app/dashboard/utils/helpers/stringUtils";
import { profileMotion, textMotion } from "./styles/motionStyles";
import PhotoAvatar from "./PhotoAvatar";

const ProfileHeader = () => {
  const name = useSelector(state => state.user.name);

  return (
    <div className="flex flex-col w-full items-center gap-1 -mt-16 md:flex-row md:justify-start md:items-end md:gap-6">
      {/* Image / Div */}
      <motion.div
        key={"Profile"}
        initial={profileMotion.start}
        animate={profileMotion.end}
        exit={profileMotion.start}
        transition={profileMotion.transition}
      >
        <PhotoAvatar/>
      </motion.div>

      {/* Name */}
      <motion.div
        key={"text"}
        initial={textMotion.start}
        animate={textMotion.end}
        exit={textMotion.start}
        transition={textMotion.transition}
      >
        <div className="text-2xl font-semibold py-2 text-gray-500 md:text-4xl">
          <p>{capitalize(name)}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileHeader;
