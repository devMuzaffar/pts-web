import { primary } from "../config/colors";

// 
// for sx Prop
// 
export const selectFieldStyle = {
  "& .MuiSelect-select": {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#475569",
  },
  "&:hover:not(.Mui-disabled):before": {
    borderBottom: "1px solid #9ca3af",
  },
  "& .MuiInputLabel-root": {
    fontSize: "14px",
    lineHeight: "20px",
    color: "black",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    fontSize: "14px",
    lineHeight: "20px",
    color: primary,
  },
  "& .MuiSelect-icon": {
    color: "#475569",
  },
  "& .MuiSelect-select.MuiSelect-outlined": {
    borderBottom: "1px solid #9ca3af",
  },
};

// 
// must place them as {...selectMenuProps} in <Select />
// 

export const selectMenuProps = {
  MenuProps: {
    PaperProps: {
      sx: {
        maxHeight: "300px",
        borderRadius: "12px",
        width: "0%"
      },
    },
    anchorOrigin: {
      vertical: "top",
    },
    transformOrigin: {
      vertical: "top",
    },
  },
}