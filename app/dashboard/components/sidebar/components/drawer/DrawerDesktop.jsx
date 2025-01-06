import { useContext } from "react";
import { SidebarContext } from "@/dashboard/context/SidebarContext";
import { Drawer } from "./styles/drawerStyles";

// Main Component
const DrawerDesktop = ({ children }) => {
  // Open State  : For Minimized - Maximized Width on Hover
  // Fixed State : For Static - Fixed Position
  const { isSidebarHover, isSidebarFixed } = useContext(SidebarContext);

  return (
    <Drawer variant="permanent" open={isSidebarHover} fixed={isSidebarFixed}>
      {children}
    </Drawer>
  );
};

export default DrawerDesktop;
