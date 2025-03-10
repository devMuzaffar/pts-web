"use client";
import uiStyle from "@/app/dashboard/styles/uiStyle";
import textFieldStyle from "@/dashboard/styles/textFieldStyle";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";

const InputField = (props) => {
  return (
    <ThemeProvider theme={uiStyle}>
      <TextField
      fullWidth
      sx={textFieldStyle}
      variant="standard"
      {...props}
    />
    </ThemeProvider>
    
  );
};

export default InputField;
