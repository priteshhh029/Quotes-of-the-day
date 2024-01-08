import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authors from "./components/Authors";
import AuthorQuotes from "./components/AuthorQuotes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/authors" element={<Authors />}></Route>
      <Route path="/author/:author" element={<AuthorQuotes />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
