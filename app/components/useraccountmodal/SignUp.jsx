"use client";
import { ModalContext } from "@/app/context/modalContext";
import registerSchema from "@/app/schemas/registerSchema";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import InputField from "./InputField";
import { register } from "@/app/lib/apiClient";
import { useDispatch } from "react-redux";
import { setUser } from "@/app/redux/slices/userSlice";

const SignUp = ({ setIsNewUser }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { setIsModalOpen } = useContext(ModalContext);
  const goBack = () => setIsNewUser(false);
  const router = useRouter();

  // Formik
  const { values, touched, handleBlur, handleChange, errors, isValid, dirty } =
    useFormik({
      initialValues: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerSchema,
    });

  // Handle Register Form
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      role: "user",
    };
    const response = await register(formData);
    console.log(response)
    if (response.status === 201) {
      const data = {
        id: response.data.user.id,
        name: response.data.user.name,
        email: response.data.user.email,
        auth: response.data.auth,
        role: response.data.user.role,
      };
      setLoading(false);
      dispatch(setUser(data));
      setIsModalOpen(false);
      router.replace("/dashboard");
    } else if (response.code === "ERR_BAD_REQUEST") {
      setLoading(false);
      alert(response.message);
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="flex flex-col flex-wrap gap-3 w-full py-6"
    >
      {/* Name */}
      <InputField
        type="text"
        placeholder="name"
        name="name"
        value={values.name}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.name && touched.name ? 1 : undefined}
        errormessage={errors.name}
      />

      {/* Username */}
      <InputField
        type="text"
        placeholder="Username"
        name="username"
        value={values.username}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.username && touched.username ? 1 : undefined}
        errormessage={errors.username}
      />

      {/* Email */}
      <InputField
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.email && touched.email ? 1 : undefined}
        errormessage={errors.email}
      />

      {/* Password */}
      <InputField
        type="password"
        placeholder="Password"
        name="password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.password && touched.password ? 1 : undefined}
        errormessage={errors.password}
      />

      {/* Confirm Password */}
      <InputField
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={values.confirmPassword}
        onBlur={handleBlur}
        onChange={handleChange}
        error={
          errors.confirmPassword && touched.confirmPassword ? 1 : undefined
        }
        errormessage={errors.confirmPassword}
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isValid || !dirty}
        className="bg-primary-blue cursor-pointer text-lg font-medium text-white rounded-md py-2 flex justify-center items-center disabled:bg-gray-400 disabled:cursor-auto"
      >
        {!loading && <p>Create New Account</p>}
        {loading && <CircularProgress color="inherit" size={28} />}
      </button>

      {/* Go Back Button */}
      <button
        className="bg-red-400 text-lg font-medium text-white rounded-md py-2"
        onClick={goBack}
      >
        Go Back
      </button>
    </form>
  );
};

export default SignUp;
