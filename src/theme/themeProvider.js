import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
        fullWidth: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
        fullWidth: true,
      },
    },
  },
  palette: {
    primary: {
      main: colors.theme.pink,
    },
    secondary: {
      main: colors.theme.purple,
    },
  },
});
