"use client";
import { ButtonBase } from "@mui/material";
import { MdOutlineEdit } from "react-icons/md";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col w-full items-center gap-1 -mt-16 md:flex-row md:justify-start md:items-end md:gap-6">
      {/* Image / Div */}
      <div className="border-4 border-white bg-[#bdbdbd] rounded-full w-32 h-32 flex justify-center items-center relative shadow-md">
        <p className="text-6xl text-white font-medium">M</p>

        {/* Edit profile */}
        <ButtonBase
          style={{
            borderRadius: 999999,
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <div className="bg-primary w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white">
            <MdOutlineEdit size={24} />
          </div>
        </ButtonBase>
      </div>

      {/* Name */}
      <div className="text-2xl font-semibold py-2 text-gray-500 md:text-4xl">
        <p>Muzaffar Hassan</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
