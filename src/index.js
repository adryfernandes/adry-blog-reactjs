import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./router/router";
import { GlobalStyle } from "./theme/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
