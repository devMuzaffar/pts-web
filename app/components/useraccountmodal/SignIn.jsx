"use client";
import { ModalContext } from "@/app/context/modalContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import InputField from "./InputField";
import { useFormik } from "formik";
import { CircularProgress } from "@mui/material";
import loginSchema from "@/app/schemas/loginSchema";
import { login } from "@/app/lib/apiClient";
import { useDispatch } from "react-redux";
import { setUser } from "@/app/redux/slices/userSlice";

const SignIn = ({ isNewUser, setIsNewUser }) => {
  const [loading, setLoading] = useState(false);
  const { setIsModalOpen } = useContext(ModalContext);
  const dispath = useDispatch();
  const router = useRouter();

  // Formik
  const { values, touched, handleBlur, handleChange, errors, isValid, dirty } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: loginSchema,
  });

  // Navigates to Register Form
  const changeForm = (e) => {
    e.preventDefault();
    setIsNewUser(!isNewUser);
  };

  // Handle Sign in
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      username: values.username,
      password: values.password,
    }
    const response = await login(formData);
    if(response.status === 200){
      const data = {
        id: response.data.user.id,
        name: response.data.user.name,
        email: response.data.user.email,
        auth: response.data.auth,
        role: "user",
      };
      setLoading(false);
      dispath(setUser(data));
      setIsModalOpen(false);
      router.push('/dashboard');
    }
    else if (response.code === "ERR_BAD_RESPONSE"){
      setLoading(false);
      alert(response.response.data.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSignIn} className="flex flex-col gap-3 w-full py-2">
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
      {/* Submit Button */}
      <button
        type="submit"
        className="bg-primary-blue cursor-pointer text-lg font-medium text-white rounded-md py-2 flex justify-center items-center"
      >
        {!loading && <p>Sign In</p>}
        {loading && <CircularProgress color="inherit" size={28}/>}
      </button>

      <div className="flex flex-col text-sm text-center gap-2">
        <a href="/" className="text-primary-blue font-medium w-full">
          Forgot Password?
        </a>
        <a
          href=""
          className="text-primary-blue font-medium w-full"
          onClick={(e) => {
            changeForm(e);
          }}
        >
          Create new account
        </a>
      </div>
    </form>
  );
};

export default SignIn;