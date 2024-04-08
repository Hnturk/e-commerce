import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "./contexts/CarContext.jsx";
import "./style/global.css";
import "./index.css";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>, document.getElementById("root"));
