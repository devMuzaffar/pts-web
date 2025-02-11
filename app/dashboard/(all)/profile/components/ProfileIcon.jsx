import { ButtonBase } from "@mui/material";
import { MdOutlineEdit } from "react-icons/md";

const ProfileIcon = () => {
  return (
    <div className="flex w-full items-center">
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
    </div>
  );
};

export default ProfileIcon;
