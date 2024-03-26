import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "./contexts/CarContext";
import "./style/global.css";
import "./index.css";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(
//   <Provider>
//     <App />
//   </Provider>
// );

ReactDOM.render(
  <Provider>
    <App />
  </Provider>, document.getElementById("root"));
