"use client";
import textFieldStyle from "@/app/dashboard/styles/textFieldStyle";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const InputField = ({ label, disabled = false, required = false, placeholder, defaultValue, name }) => {
  const MuiTextField = styled(TextField)(textFieldStyle);
  return (
    <MuiTextField
      fullWidth
      required={required}
      disabled={disabled}
      error={false}
      label={label}
      name={name}
      defaultValue={defaultValue || ""}
      variant="standard"
      placeholder={placeholder || ""}
      helperText={name ? `${name} is required field` : false}
    />
  );
};

export default InputField;
