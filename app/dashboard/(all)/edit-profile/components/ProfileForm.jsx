"use client";
import { useState } from "react";
import InputField from "./InputFields/InputField";
import InputFieldPhone from "./InputFields/InputFieldPhone";
import SelectField from "./InputFields/SelectField";
import InputDob from "./InputFields/InputDob";
import SelectCountry from "./InputFields/SelectCountry";
import AcademicRecords from "./InputFields/AcademicRecords";
import { Button } from "@mui/material";

const ProfileForm = () => {
  const genderList = ["Male", "Female"];
  const [gender, setGender] = useState(genderList[0]);
  const [country, setCountry] = useState("Pakistan");
  const [city, setCity] = useState("Karachi");

  // Many Field Lack States

  return (
    <div className="w-full overflow-hidden rounded-xl bg-white border-[1px] border-gray-200 shadow-sm">
      {/* Banner */}
      <div className="h-14 w-full bg-primary text-white font-semibold flex items-center px-4">
        Profile
      </div>

      <div className="p-4 flex flex-col gap-4 item-center">
        {/* Name */}
        <InputField label={"Your Name"} required />

        {/* Email */}
        <InputField label={"Email"} required />

        {/* Whatsapp No. */}
        <InputFieldPhone required disabled label={"Whatsapp No"} />

        {/* Contact No */}
        <InputFieldPhone label={"Contact No"} />

        {/* Gender */}
        <SelectField
          label="Your Gender"
          value={gender}
          setValue={setGender}
          list={genderList}
        />

        {/* Date of Birth */}
        <InputDob />

        {/* Email */}
        <InputField label={"Address"} />

        {/* Country + City */}
        <SelectCountry
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
        />

        {/* Last Institute Attended */}
        <InputField
          placeholder="ABC University"
          label="Last Institute Attended"
        />

        {/* Academic Records */}
        <AcademicRecords />

        {/* Button */}
        <div className="md:mx-auto">
        <Button
          fullWidth
          className="!bg-primary !rounded-full !font-bold !py-3 md:!w-96"
          variant="contained"
          disableElevation
        >
          SAVE
        </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
