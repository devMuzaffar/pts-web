"use client";
import { MdOutlineMenuOpen } from "react-icons/md";
import Button from "./components/Button";
import { PiBellLight } from "react-icons/pi";
import { IconButton, ButtonBase } from "@mui/material/index";
import { buttonBaseSx } from "./styles/materialStyles";
import DropdownMenu from "./components/DropdownMenu";
import { counselorList, profileList } from "./list/dropDownList";
import { useContext, useState } from "react";
import { SidebarContext } from "@/dashboard/context/SidebarContext";
import { useRouter } from "next/navigation";
import { signout } from "@/app/lib/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "@/app/redux/slices/userSlice";
import Image from "next/image";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useRouter();
  const dispatch = useDispatch();

  // Mobile Sidebar Button Context
  const { setIsMobileSidebar } = useContext(SidebarContext);

  // Counselor States
  const [counselorEl, setCounselorEl] = useState(null);
  const open = Boolean(counselorEl);

  // Notification States
  const [notifEl, setNotifEl] = useState(null);
  const openNotif = Boolean(notifEl);

  // Profile Avatar States
  const [profileEl, setProfileEl] = useState(null);
  const openProfile = Boolean(profileEl);

  // Open Counselor Menu
  const openCounselorMenu = (e) => setCounselorEl(e.currentTarget);
  // Open Notifications Menu
  const openNotificationsMenu = (e) => setNotifEl(e.currentTarget);
  // Open Profile Menu
  const openProfileMenu = (e) => setProfileEl(e.currentTarget);

  //  Toggles Sidebar on Mobile
  const toggleSidebar = () => {
    setIsMobileSidebar(true);
  };

  // Handle Share Function
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          url: window.location.href,
        });
        console.log("URL shared successfully");
      } catch (error) {
        console.error("Error sharing the URL:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  // Profile Function navigates to other pages on Click
  const handleProfileNav = async (item) => {
    if (item.text === "My Profile") {
      navigate.push("/dashboard/profile");
    } else if (item.text === "Logout") {
      // Logs out of Dashboard
      const response = await signout();
      if (response.status === 200) {
        window.location.href = "/";
        setTimeout(() => {
          dispatch(removeUser());
        }, 500);
      } else {
        alert(response.message);
      }
    }
  };

  return (
    <div className="flex justify-between pt-4 px-2 pb-1">
      {/* Left */}
      {/* Show Sidebar: Mobile */}
      {/* Buttons */}
      <div className="px-2 flex gap-3">
        {/* Toggle Sidebar Button: Mobile */}
        <div className="p-4 md:hidden" onClick={toggleSidebar}>
          <MdOutlineMenuOpen className="cursor-pointer" size={18} />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Share with friends */}
          <Button
            className={"hidden sm:flex"}
            imgSrc={"/dashboard/header/share.svg"}
            text={"Share with friends"}
            onClick={handleShare}
          />

          {/* Talk to Counselor */}
          <div className="select-none relative">
            <Button
              imgSrc={"/dashboard/header/counselor.svg"}
              text={"Talk to counselor"}
              onClick={openCounselorMenu}
            />

            {/* Counselor dropdown Menu */}
            <DropdownMenu
              anchorEl={counselorEl}
              setAnchorEl={setCounselorEl}
              open={open}
              list={counselorList}
              className="text-sm w-48 text-gray-600"
            />
          </div>
        </div>
      </div>

      {/* Right */}
      {/* Bell & Profile */}
      <div className="hidden items-center gap-1 xs:flex">
        {/* Notifications */}
        <div onClick={openNotificationsMenu}>
          <IconButton sx={{ padding: "4px" }}>
            <PiBellLight size={32} className="text-gray-600" />
          </IconButton>
        </div>

        {/* Notifications dropdown Menu */}
        <DropdownMenu
          anchor="right"
          anchorEl={notifEl}
          setAnchorEl={setNotifEl}
          open={openNotif}
          list={[{ icon: "", text: "No notifications were found" }]}
          className="font-bold"
        />

        {/* Profile Icon */}
        <div onClick={openProfileMenu}>
          <ButtonBase
            sx={buttonBaseSx}
            className="transition-all hover:bg-slate-200"
          >
            {/* Avatar */}
            <div className="bg-[#bdbdbd] rounded-full w-10 h-10 flex justify-center items-center">
              {/* Profile Picture */}
              {user.profile ? (
                <Image
                  className="rounded-full"
                  src={user.profile}
                  alt="profilepicture"
                  unoptimized
                  width={200}
                  height={200}
                />
              ) : (
                <p className="text-xl text-white font-semibold">
                  {user.name[0].toUpperCase()}
                </p>
              )}
            </div>
          </ButtonBase>
        </div>

        {/* Profile dropdown Menu */}
        <DropdownMenu
          anchorEl={profileEl}
          setAnchorEl={setProfileEl}
          open={openProfile}
          list={profileList}
          className="font-semibold"
          onClick={handleProfileNav}
        />
      </div>
    </div>
  );
};

export default Header;
