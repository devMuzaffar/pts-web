import { Button } from "@mui/material";
import { ddButton } from "@/dashboard/styles/materialButton";
import { useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { SidebarContext } from "@/dashboard/context/SidebarContext";
import { normalizedText } from "@/dashboard/utils/helpers/stringUtils";
import getMenuList from "@/app/dashboard/list/menuList";

const DropdownMenu = ({ isSelected, dropdownCondition }) => {
  const menuList = getMenuList();
  const router = useRouter();
  const pathname = usePathname();
  const { dropdownList } = useContext(SidebarContext);
  const [selectedIndexdd, setSelectedIndexdd] = useState(null);

  //
  // useEffect()
  // Persist highlighted button upon refreshing page || Clicking on another dropdown
  // de-highlights dropdown selected button upon changing routes
  //
  useEffect(() => {
    const currentPath = String(normalizedText(pathname)).replace(
      "Dashboard ",
      ""
    );

    menuList.forEach(({ dropdown }) => {
      if (isSelected) {
        localStorage.setItem("current-index", null);
        // If dropdown List exist?
        if (dropdown) {
          // If dropdown[i] === current pathname ?
          if (dropdownList.includes(currentPath)) {
            // find & return index number matching with pathname
            const matchedIndex = dropdownList.findIndex(
              (text) => text === currentPath
            );
            setSelectedIndexdd(matchedIndex);
          }
        }
      } else {
        setSelectedIndexdd(null);
      }
    });
  }, [dropdownList, pathname, isSelected]);

  // Highlights button when selected
  const dropDownButtonCondition = (index) =>
    selectedIndexdd === index
      ? "border-[#e3a314] border-b-2"
      : "border-b-2 border-transparent";

  // Dropdown Button onClick Route
  // Highlights text only when parent button is selected
  // Also Remove spaces + lower case of Selected String for route
  // Converted String will navigate to other page
  const selectDropdownItem = (item, index) => {
    setSelectedIndexdd(isSelected ? index : null);
    const routeText = `/dashboard/${item.replace(" ", "-").toLowerCase()}`;
    router.push(routeText);
  };

  return (
    <div
      className={`transition-all flex flex-col justify-center overflow-hidden ${dropdownCondition}`}
    >
      {dropdownList.map((item, index) => (
        <div key={index}>
          <Button
            sx={ddButton}
            variant="text"
            onClick={() => {
              selectDropdownItem(item, index);
            }}
          >
            <p className={dropDownButtonCondition(index)}>{item}</p>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
