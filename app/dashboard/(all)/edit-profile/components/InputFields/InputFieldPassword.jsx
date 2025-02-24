"use client";
import textFieldStyle from "@/app/dashboard/styles/textFieldStyle";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from "react-icons/md";

const InputFieldPassword = ({ label, disabled = false, required = false }) => {
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <TextField
      fullWidth
      required={required}
      disabled={disabled}
      error={false}
      label={label}
      sx={textFieldStyle}
      type={viewPassword ? "text" : "password"}
      variant="standard"
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
      // helperText="Name is required field"
    />
  );
};

export default InputFieldPassword;
