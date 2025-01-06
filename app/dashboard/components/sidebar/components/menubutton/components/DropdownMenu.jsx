import { Button } from "@mui/material";
import { ddButton } from "@/dashboard/styles/materialButton";
import { useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { SidebarContext } from "@/dashboard/context/SidebarContext";
import { normalizedText } from "@/dashboard/utils/helpers/stringUtils";
import menuList from "../../../../../list/menuList";

const DropdownMenu = ({ isSelected, dropdownCondition }) => {
  const router = useRouter();
  const pathName = usePathname();
  const { dropdownList } = useContext(SidebarContext);

  // Selected Index for Dropdown Item
  const [selectedIndex, setSelectedIndex] = useState(null);

  // 
  // useEffect() - de-highlights dropdown selected button upon changing routes
  // Persist highlighted button upon refreshing page
  // 
  useEffect(() => {
    const currentPath = String(normalizedText(pathName)).replace("Dashboard ", "");

    menuList.forEach(({ dropdown }) => {
      // If dropdown key exist?
      if (dropdown) {
        if (dropdownList.includes(currentPath)) {
          const matchedIndex = dropdownList.findIndex(
            (text) => text === currentPath
          );
          isSelected &&
            setSelectedIndex(matchedIndex !== -1 ? matchedIndex : null);
        }
      }
    });
  }, [dropdownList]);

  // Highlights button when selected
  const dropDownButtonCondition = (index) =>
    selectedIndex === index
      ? "border-[#e3a314] border-b-2"
      : "border-b-2 border-transparent";

  // Dropdown Button onClick Route
  const selectDropdownItem = (item, index) => {
    // Highlights text only when parent button is selected
    isSelected ? setSelectedIndex(index) : setSelectedIndex(null);

    // Remove space + lower case of Selected String for route
    // Converted String will navigate to other page
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
