import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
