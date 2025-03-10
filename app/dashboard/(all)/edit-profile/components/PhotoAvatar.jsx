"use client";
import { useSelector, useDispatch } from "react-redux";
import { ButtonBase } from "@mui/material";
import { MdOutlineEdit } from "react-icons/md";
import { useRef, useState } from "react";
import { updatePicture } from "@/app/lib/apiClient";
import { setUser } from "@/app/redux/slices/userSlice";
import Image from "next/image";

const PhotoAvatar = () => {
  const photoRef = useRef(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Converts File to Base64 String
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Adds Photo Path in Photo State upon Changes
  const getPhoto = async (e) => {
    const file = e.target.files[0];

    // Upload File & Change Profile Picture
    try {
      // Convert File to Base64 String
      const base64String = await fileToBase64(file);
      const response = await updatePicture({ profile: base64String });
      if (response.status === 200) {
        dispatch(setUser({ profile: response.data.profile }));
      }
    } catch (error) {
      alert(response.response.data.message);
    }
  };

  return (
    <div className="border-4 border-white bg-[#bdbdbd] rounded-full w-32 h-32 flex justify-center items-center relative shadow-md">
      {/* Image */}
      {user.profile ? (
        <Image
          className="rounded-full"
          src={user.profile}
          alt="profilepicture"
          width={200}
          height={200}
        />
      ) : (
        <p className="text-6xl text-white font-medium">
          {user.name[0].toUpperCase()}
        </p>
      )}

      {/* Edit profile */}
      <ButtonBase
        onClick={() => photoRef.current.click()}
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
        <input
          ref={photoRef}
          type="file"
          name="photo"
          accept="image/jpg, image/jpeg, image/png"
          hidden
          onChange={getPhoto}
        />
      </ButtonBase>
    </div>
  );
};

export default PhotoAvatar;
