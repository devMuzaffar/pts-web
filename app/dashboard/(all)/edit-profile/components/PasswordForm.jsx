"use client";
import { Button } from "@mui/material";
import InputFieldPassword from "./InputFields/InputFieldPassword";
import { passwordUpdateSchema } from "@/app/schemas/updateSchema";
import { useFormik } from "formik";
import { updatePassword } from "@/app/lib/apiClient";
import { Notification } from "@/app/dashboard/components";
import { useState } from "react";

const PasswordForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Formik
  const { values, touched, handleBlur, handleChange, errors, resetForm } =
    useFormik({
      initialValues: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      validationSchema: passwordUpdateSchema,
    });

  // Handle Password Update
  const handlePasswordUpdate = async () => {
    const data = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    };
    const response = await updatePassword(data);
    if (response.status === 200) {
      setMessage(response.data.message);
      setIsOpen(true);
      resetForm();
    } else {
      alert(response.response.data.message);
      setIsOpen(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white border-[1px] border-gray-200 shadow-sm h-fit md:w-4/6">
      {/* Notification Password */}
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
        Change Password
      </div>

      {/* Input Fields */}
      <div className="p-4 space-y-4 overflow-y-auto">
        {/* Old Password */}
        <InputFieldPassword
          required
          label={"Old Password"}
          name="oldPassword"
          value={values.oldPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.oldPassword && touched.oldPassword ? 1 : undefined}
          helperText={errors.oldPassword}
        />

        {/* New Password */}
        <InputFieldPassword
          required
          label={"New Password"}
          name="newPassword"
          value={values.newPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.newPassword && touched.newPassword ? 1 : undefined}
          helperText={errors.newPassword}
        />

        {/* Confirm Password */}
        <InputFieldPassword
          required
          label={"Confirm Password"}
          name="confirmPassword"
          value={values.confirmPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          error={
            errors.confirmPassword && touched.confirmPassword ? 1 : undefined
          }
          helperText={errors.confirmPassword}
        />

        {/* Save button */}
        <div className="pt-4">
          <Button
            fullWidth
            className="!bg-primary !rounded-full !font-bold !py-3"
            variant="contained"
            disableElevation
            onClick={handlePasswordUpdate}
          >
            SAVE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PasswordForm;
