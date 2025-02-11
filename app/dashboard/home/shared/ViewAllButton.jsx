"use client";
import { viewAllButton } from "@/dashboard/styles/materialButton";
import { ButtonBase } from "@mui/material";

const ViewAllButton = ({ hasOutline, onClick }) => {
  const fontThick = hasOutline ? "font-medium" : "font-normal";

  const handleClick = () => {
    if(onClick){
      onClick();
    }
  }

  return (
    <div onClick={handleClick}>
      <ButtonBase
      sx={viewAllButton({ hasOutline })}
      className={`text-xs truncate font-normal ${fontThick}`}
    >
      View All
    </ButtonBase>
    </div>
  );
};

export default ViewAllButton;
