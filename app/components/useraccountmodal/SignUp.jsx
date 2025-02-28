"use client";
import { ModalContext } from "@/app/context/modalContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const SignUp = ({ setIsNewUser }) => {
  const { setIsModalOpen } = useContext(ModalContext);
  const goBack = () => setIsNewUser(false);
  const router = useRouter();

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    router.replace("/dashboard");
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-3 w-full py-6">
      <input
        className="p-2 border-2 outline-none rounded-md px-5"
        type="email"
        placeholder="Email"
      />
      <input
        className="p-2 border-2 outline-none rounded-md px-5"
        type="text"
        placeholder="Username"
      />
      <input
        className="p-2 border-2 outline-none rounded-md px-5"
        type="password"
        placeholder="Password"
      />
      <button
        type="submit"
        className="bg-primary-blue text-lg font-medium text-white rounded-md py-2"
      >
        Create New Account
      </button>
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
