import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./router/router";
import { GlobalStyle } from "./theme/globalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/themeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
