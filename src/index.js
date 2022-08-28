import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./MainPage";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./lib";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <MainPage />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
