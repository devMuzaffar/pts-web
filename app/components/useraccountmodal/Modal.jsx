"use client";
import { IoClose } from "react-icons/io5";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "@/app/context/modalContext";

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const [isNewUser, setIsNewUser] = useState(false);

  // Prevent Modal from closing
  const preventClosing = (e) => e.stopPropagation();

  // Close the Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Toggle Between Signup and SignIn Views
  const userViewClass = isNewUser ? "hidden" : "flex";

  // Resets to Sign In View upon closing Modal
  useEffect(() => {
    !isModalOpen && setIsNewUser(false);
  }, [isModalOpen]);

  return (
    <div
      className="bg-[#F1FCFF] px-4 py-2 flex flex-col justify-evenly items-center border-2 w-96"
      onClick={(e) => {
        preventClosing(e);
      }}
    >
      <div className="w-full flex justify-end cursor-pointer">
        <IoClose size={32} className="text-red-500" onClick={closeModal} />
      </div>

      <div className={`flex flex-col text-center gap-2 ${userViewClass}`}>
        <h2 className="text-4xl font-medium text-primary-blue">Welcome</h2>
        <p className="text-xl">Sign in to your account!</p>
      </div>

      {/* Sign In & Sign Up Switch */}
      {isNewUser ? (
        <SignUp isNewUser={isNewUser} setIsNewUser={setIsNewUser} />
      ) : (
        <SignIn isNewUser={isNewUser} setIsNewUser={setIsNewUser} />
      )}
    </div>
  );
};

export default Modal;
