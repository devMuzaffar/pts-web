"use client";

import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import uiStyle from "@/dashboard/styles/uiStyle";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const buttonStyle = createTheme(uiStyle);

const Button = ({ children, isDisabled }) => {
  const MaterialButton = styled(MuiButton)(({ theme }) => ({
    color: "white",
    borderRadius: "9999px",
    boxShadow: "none",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      boxShadow: "none",
    },
    width: "100%",
    height: "46px",
    [theme.breakpoints.up("sm")]: {
      width: "200px",
    },
  }));

  return (
    <ThemeProvider theme={buttonStyle}>
      <MaterialButton disabled={isDisabled} variant="contained">
        {children}
      </MaterialButton>
    </ThemeProvider>
  );
};

export default Button;
