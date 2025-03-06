"use client";
import { useState } from "react";
import { Header, Notification, Sidebar } from "../index";
import SidebarProvider from "@/dashboard/context/SidebarContext";
import PageWrapper from "../wrappers/PageWrapper";
import { useSelector } from "react-redux";
import { notFound } from "next/navigation";
import useDelay from "../../utils/helpers/useDelay";

//
// Main Component - Renders Whole UI
//

// <SidebarProvider> for Show/Hide sidebar from both Sidebar & Header Component
// <PageWrapper> Wraps Child Component with (Loading + Animation)

const MainComponent = ({ children }) => {
  // Notification State
  const [isOpen, setIsOpen] = useState(false);
  const isUserExist = useSelector((state) => state.user.auth);

  // Dummy Delay for Notification
  useDelay(() => {
    setIsOpen(true);
  }, 2000);

  return !isUserExist ? (
    notFound()
  ) : (
    <SidebarProvider>
      {/* Notification */}
      <Notification
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        message={`Login Sucessfully`}
        time={3000}
      />

      {/* Main UI */}
      <Sidebar />
      <div
        className={`w-full md:w-[calc(100vw-5vw)] overflow-y-auto overflow-x-hidden`}
      >
        <Header />
        {/* Dynamic Pages */}
        <PageWrapper>{children}</PageWrapper>
      </div>
    </SidebarProvider>
  );
};

export default MainComponent;
