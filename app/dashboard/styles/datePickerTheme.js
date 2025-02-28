import { createTheme } from "@mui/material/styles";
import { primary } from "../config/colors";

const datePickerTheme = createTheme({
  palette: {
    primary: {
      main: primary,
      dark: primary,
      contrastText: "#ffffff"
    },
  },
});

export default datePickerTheme;