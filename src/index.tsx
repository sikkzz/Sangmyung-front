import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./hook/ScrollToTop";
import ReactGA from 'react-ga'

const TRACKING_ID = "G-4LB5WCV8HG"
ReactGA.initialize(TRACKING_ID)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
