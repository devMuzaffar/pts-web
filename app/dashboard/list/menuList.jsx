"use client";
import { useSelector } from "react-redux";

export const adminList = [
      { text: "Home", icon: "/dashboard/sidebar/icons/1.png" },
      {
        text: "Practice Zone",
        icon: "/dashboard/sidebar/icons/2.svg",
        dropdown: ["Chapter Tests", "Mock Tests", "Grand Test"],
      },
      { text: "Questions Bank", icon: "/dashboard/sidebar/icons/10.png" },
      { text: "Manage Users", icon: "/dashboard/sidebar/icons/3.png" },
      { text: "Payments", icon: "/dashboard/sidebar/icons/12.png" },
      { text: "News & Ads", icon: "/dashboard/sidebar/icons/4.png" },
      { text: "Analytics", icon: "/dashboard/sidebar/icons/8.png" },
      {
        text: "Support",
        icon: "/dashboard/sidebar/icons/9.png",
        dropdown: ["Chat", "Contact Us", "Feedback"],
      },
      { text: "Log Out", icon: "/dashboard/sidebar/icons/11.png" },
];
    
export const userList = [
      { text: "Home", icon: "/dashboard/sidebar/icons/1.png" },
      {
        text: "Practice Zone",
        icon: "/dashboard/sidebar/icons/2.svg",
        dropdown: ["Chapter Tests", "Mock Tests", "Grand Test"],
      },
      { text: "Study Group", icon: "/dashboard/sidebar/icons/3.png" },
      { text: "News & Ads", icon: "/dashboard/sidebar/icons/4.png" },
      { text: "Change Course", icon: "/dashboard/sidebar/icons/5.png" },
      { text: "Bookmarks", icon: "/dashboard/sidebar/icons/6.png" },
      { text: "Personal Notes", icon: "/dashboard/sidebar/icons/7.png" },
      {
        text: "Support",
        icon: "/dashboard/sidebar/icons/9.png",
        dropdown: ["Chat", "Contact Us", "Feedback"],
      },
      { text: "Log Out", icon: "/dashboard/sidebar/icons/11.png" },
];

// Will Return List based on User's Role
const getMenuList = () => {
  let menuList;
  const role = useSelector(state => state.user.role);
  menuList = role === 'admin' || role === 'Admin' ? adminList : userList;
  return menuList;
}

export default getMenuList;
