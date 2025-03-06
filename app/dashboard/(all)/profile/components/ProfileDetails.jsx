"use client";
import { useRouter } from "next/navigation";
import { ButtonBase } from "@mui/material";
import { useSelector } from "react-redux";
import { capitalize } from "@/app/dashboard/utils/helpers/stringUtils";

const ProfileDetails = () => {
  const title = "text-3xl leading-10 text-dark font-bold";
  const router = useRouter();
  const navigateEditProfile = () => router.push('edit-profile');
  const user = useSelector(state => state.user);

  return (
    <div className="grid gap-4 py-2 sm:grid-cols-2 md:grid-cols-4">
      {/* Name */}
      <h1 className={title}>Hi {capitalize(user.name)}</h1>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <h1 className={title}>Email</h1>
        <p className="text-slate-500 font-semibold text-sm">
          {user.email}
        </p>
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <h1 className={title}>Phone</h1>
        <p className="text-slate-500 font-semibold text-sm">{user.phoneNumber || "N/A"}</p>
      </div>

      {/* Edit Profile */}
      <div className="flex items-center justify-center h-full">
        <ButtonBase
          style={{ borderRadius: 99999, width: "100%", height: "40px" }}
          className="!text-primary"
        >
          <div className="flex justify-center items-center border-[1px] border-primary text-primary w-full uppercase font-semibold rounded-full h-full" onClick={navigateEditProfile}>
            Edit Profile
          </div>
        </ButtonBase>
      </div>
    </div>
  );
};

export default ProfileDetails;
