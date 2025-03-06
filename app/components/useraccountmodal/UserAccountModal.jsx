"use client";
import Modal from "./Modal";
import { useContext } from "react";
import { ModalContext } from "@/app/context/modalContext";

const UserAccountModal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  // Closes Modal on Clicking Background
  const hideModal = () => {
    setIsModalOpen(!isModalOpen)
  };

  //  Determines the visibility of the modal
  const modalVisibleClass = isModalOpen ? "flex" : "hidden";

  return (
    <div
      className={`bg-black bg-opacity-50 w-full h-full fixed z-[60]
    ${modalVisibleClass} justify-center items-center`}
      onClick={hideModal}
    >
      {/* Modal Component */}
      <Modal />
    </div>
  );
};

export default UserAccountModal;
