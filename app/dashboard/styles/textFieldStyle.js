import { primary } from "../config/colors";

const textFieldStyle = {
  "& .MuiInputBase-input": {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#475569",
    // color: primary,
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#e2e8f0",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: primary,
  },
  "& .MuiInputLabel-root": {
    fontSize: "14px",
    lineHeight: "20px",
    // color: "black",
  },
  "& .MuiInputLabel-root.Mui-disabled": {
    color: "#9ca3af",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    fontSize: "14px",
    lineHeight: "20px",
    color: "primary",
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "red",
  },
  "& .MuiInput-underline.Mui-error:before": {
    borderBottomColor: "red",
  },
  "& .MuiInput-underline.Mui-error:after": {
    borderBottomColor: "red",
  },

  "& .MuiInput-underline:before": {
    borderBottom: "1px solid #9ca3af",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottom: "1px solid #9ca3af !important",
  },
  "& .MuiInput-underline.Mui-disabled:before": {
    borderBottom: "1px solid #9ca3af ", 
  },
  "& .MuiFormHelperText-root": {
    // color: primary
  },
};

export default textFieldStyle;
