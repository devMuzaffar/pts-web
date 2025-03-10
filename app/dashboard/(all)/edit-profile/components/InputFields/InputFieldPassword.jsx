"use client";
import textFieldStyle from "@/app/dashboard/styles/textFieldStyle";
import { ThemeProvider } from "@mui/material/styles";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from "react-icons/md";
import uiStyle from "@/app/dashboard/styles/uiStyle";

const InputFieldPassword = (props) => {
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <ThemeProvider theme={uiStyle}>
      <TextField
      fullWidth
      sx={textFieldStyle}
      type={viewPassword ? "text" : "password"}
      variant="standard"
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              className="!p-3"
              onClick={() => setViewPassword(!viewPassword)}
            >
              {viewPassword ? (
                <MdOutlineRemoveRedEye size={24} />
              ) : (
                <MdOutlineVisibilityOff size={24} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    </ThemeProvider>
  );
};

export default InputFieldPassword;
