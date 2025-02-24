"use client";
import textFieldStyle from "@/app/dashboard/styles/textFieldStyle";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const InputField = ({ label, disabled = false, required = false }) => {
  const MuiTextField = styled(TextField)(textFieldStyle);
  return (
    <MuiTextField
      fullWidth
      required={required}
      disabled={disabled}
      error={false}
      label={label}
      defaultValue=""
      variant="standard"
      //   helperText="Name is required field"
    />
  );
};

export default InputField;
