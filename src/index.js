import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CustomUserContext from "./userContext";
import { BrowserRouter } from "react-router-dom";

import CustomProductContext from "./productContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CustomUserContext>
      <CustomProductContext>
        <App />
      </CustomProductContext>
    </CustomUserContext>
  </BrowserRouter>
);
