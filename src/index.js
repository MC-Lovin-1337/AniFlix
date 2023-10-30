import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { LangProvider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <LangProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LangProvider>
  </HashRouter>
);
