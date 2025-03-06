import {
  formatToPath,
  normalizedText,
} from "@/dashboard/utils/helpers/stringUtils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import getMenuList from "@/app/dashboard/list/menuList";
import { signout } from "@/app/lib/apiClient";
import { useDispatch } from "react-redux";
import { removeUser } from "@/app/redux/slices/userSlice";

const useSidebar = ({
  setDropdownList,
  isSidebarFixed,
  setIsSidebarHover,
  setSelectedIndex,
}) => {
  const dispatch = useDispatch();
  const menuList = getMenuList();
  const router = useRouter();
  const pathname = usePathname();
  let currentIndex = null;

  //
  // UseEffect to persist selectedIndex path even when page is refreshed
  //
  useEffect(() => {
    // this method Scans and finds first word matches from menu List
    // Returns 0 if no match found
    // Else it returns index Number

    currentIndex = menuList.reduce((acc, { text }, index) => {
      const currentPath = String(normalizedText(pathname)).replace(
        "Dashboard ",
        ""
      );
      const firstWord = text.substring(
        0,
        text.indexOf(" ") === -1 ? text.length : text.indexOf(" ")
      );
      if (pathname === "/dashboard") return 0;
      if (currentPath.includes(firstWord)) return index;

      // Return default -1 value
      return acc;
    }, -1);

    // If Not found, then select Home by default
    if (currentIndex === -1) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(currentIndex);
      // Store current Index in local Storage for persistance on refresh
      localStorage.setItem("current-index", currentIndex);
    }
  }, [pathname]);

  //
  // Handle Navigation Function
  //
  const handleNavigation = async (index, text, dropdownList) => {
    // Sets Index
    setSelectedIndex(index);

    // Route to specific path only if has no dropdown List
    const routeText = formatToPath(text);
    const routePath = `/dashboard/${routeText}`;

    if (!dropdownList) {
      if (routeText.includes("home")) {
        router.push("/dashboard/");
      } else if (routeText.includes("log")) {

        // Logs out of Dashboard
        const response = await signout();
        if (response.status === 200) {
          window.location.href = "/";
          setTimeout(() => {dispatch(removeUser())}, 500);
        } else {
          alert(response.message);
        }
      } else {
        router.push(routePath);
      }
    }

    setDropdownList(dropdownList ? dropdownList : []);
  };

  //
  // Dynamic Sidebar Methods
  //
  const expandSidebar = () => isSidebarFixed && setIsSidebarHover(true);
  const minimizeSidebar = () => isSidebarFixed && setIsSidebarHover(false);

  return {
    handleNavigation,
    expandSidebar,
    minimizeSidebar,
  };
};

export default useSidebar;
