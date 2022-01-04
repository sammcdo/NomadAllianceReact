import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Routes, Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Navbar from "./Navbar";
import About from "./About";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
