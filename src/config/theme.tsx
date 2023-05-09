import "@fontsource/ntr";
import "@fontsource/dosis";

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ae7dff",
    },
    secondary: {
      main: "#0a192f",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["NTR", "Dosis"].join(","),
  },
});

export default theme;
