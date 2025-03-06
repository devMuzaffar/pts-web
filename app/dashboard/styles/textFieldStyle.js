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
        color: "black",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        fontSize: "14px",
        lineHeight: "20px",
        color: primary,
    },

    "& .MuiInput-underline:before": {
      borderBottom: "1px solid #9ca3af",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "1px solid #9ca3af !important",
    },
    "& .MuiFormHelperText-root": {
      color: primary
    }
  }

export default textFieldStyle;