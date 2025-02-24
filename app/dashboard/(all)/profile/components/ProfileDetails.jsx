"use client";
import { useRouter } from "next/navigation";
import { ButtonBase } from "@mui/material";

const ProfileDetails = () => {
  const title = "text-3xl leading-10 text-dark font-bold";
  const router = useRouter();

  const navigateEditProfile = () => router.push('edit-profile');

  return (
    <div className="grid gap-4 py-2 sm:grid-cols-2 md:grid-cols-4">
      {/* Name */}
      <h1 className={title}>Hi Example Name</h1>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <h1 className={title}>Email</h1>
        <p className="text-slate-500 font-semibold text-sm">
          examplemail123@gmail.com
        </p>
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <h1 className={title}>Phone</h1>
        <p className="text-slate-500 font-semibold text-sm">+92 123 4567891</p>
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
