import { primary, secondary } from "../config/colors";
import { createTheme } from "@mui/material/styles";
import { alpha } from '@mui/material/styles';

const uiStyle = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
          },
          '&:active': {
            backgroundColor: alpha(theme.palette.primary.main, 0.2),
          },
          '& .MuiTouchRipple-root': {
            color: alpha(theme.palette.primary.main, 0.5),
          },
        }),
      },
    },
  },
});

export default uiStyle;