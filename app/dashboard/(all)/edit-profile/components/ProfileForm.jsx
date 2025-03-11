"use client";
import { useState } from "react";
import InputField from "./InputFields/InputField";
import InputFieldPhone from "./InputFields/InputFieldPhone";
import SelectField from "./InputFields/SelectField";
import InputDob from "./InputFields/InputDob";
import SelectCountry from "./InputFields/SelectCountry";
import AcademicRecords from "./InputFields/AcademicRecords";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { nameUpdateSchema } from "@/app/schemas/updateSchema";
import { update } from "@/app/lib/apiClient";
import { Notification } from "@/app/dashboard/components";
import { useDispatch } from "@/node_modules/react-redux/dist/react-redux";
import { setUser } from "@/app/redux/slices/userSlice";
const genderList = ["Male", "Female"];

// Dyamic your Top header Name upon Update
// Ensure all fields are updating
// Fix Degrees on refresh not grabbing!

const ProfileForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  // Redux State for Default Values
  const user = useSelector((state) => state.user);

  // States
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");
  const [whatsappNumber, setWhatsappNumber] = useState(
    user.whatsappNumber || ""
  );
  const [gender, setGender] = useState(user.gender || genderList[0]);
  const [dob, setDob] = useState(user.dob || "");
  const [address, setAddress] = useState(user.address || "");
  const [country, setCountry] = useState(user.country || "Pakistan");
  const [city, setCity] = useState(user.city || "Karachi");
  const [lastInstitute, setLastInstitute] = useState(user.lastInstitute || "");
  const [degrees, setDegrees] = useState(
    user.degrees.length > 0 ? user.degrees : [{ degree: "", percentage: "" }]
  );

  // Validation for Name only
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: { name: user.name || "" },
    validationSchema: nameUpdateSchema,
  });

  // Handle Form Update
  const handleFormSubmission = async () => {
    const data = {
      name: values.name,
      whatsappNumber,
      phoneNumber,
      gender,
      dob,
      address,
      country,
      city,
      lastInstitute,
      degrees,
    };
    const response = await update(data);
    if (response.status === 200) {
      setMessage(response.data.message);
      dispatch(setUser(response.data.user));
      setIsOpen(true);
    } else {
      alert(response.response.data.message);
      setIsOpen(false);
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-xl bg-white border-[1px] border-gray-200 shadow-sm">
      {/* Notification */}
      <Notification
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        message={message}
        time={3000}
      />

      {/* Banner */}
      <div className="h-14 w-full bg-primary text-white font-semibold flex items-center px-4">
        Profile
      </div>

      <div className="p-4 flex flex-col gap-4 item-center">
        {/* Name */}
        <InputField
          required
          label={"Your Name"}
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name && touched.name ? 1 : undefined}
          helperText={errors.name}
        />

        {/* Email */}
        <InputField label={"Email"} disabled defaultValue={user.email} />

        {/* Whatsapp No. */}
        <InputFieldPhone
          label={"Whatsapp No"}
          value={whatsappNumber}
          setValue={setWhatsappNumber}
        />

        {/* Phone No. */}
        <InputFieldPhone
          required
          label={"Phone No"}
          value={phoneNumber}
          setValue={setPhoneNumber}
        />

        {/* Gender */}
        <SelectField
          label="Your Gender"
          value={gender}
          setValue={setGender}
          list={genderList}
        />

        {/* Date of Birth */}
        <InputDob value={dob} setValue={setDob} />

        {/* Address */}
        <InputField
          label={"Address"}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

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
          value={lastInstitute}
          onChange={(e) => setLastInstitute(e.target.value)}
        />

        {/* Academic Records */}
        <AcademicRecords degrees={degrees} setDegrees={setDegrees} />

        {/* Button */}
        <div className="md:mx-auto">
          <Button
            fullWidth
            className="!bg-primary !rounded-full !font-bold !py-3 md:!w-96"
            variant="contained"
            disableElevation
            onClick={handleFormSubmission}
          >
            SAVE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
