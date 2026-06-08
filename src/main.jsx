import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/business-card.css";

/*
 * GitHub Pages React Router Redirect Support
 * public/404.html 에서 전달한 URL 복구
 */

const redirect = new URLSearchParams(
  window.location.search
).get("p");

if (redirect) {

  window.history.replaceState(
    null,
    "",
    redirect
  );

}

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);