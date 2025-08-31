import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import CreateContextProvider from "./context/CreateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CreateContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CreateContextProvider>
);
