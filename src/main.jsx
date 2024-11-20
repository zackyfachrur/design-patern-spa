import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import LoginPages from "./LoginPage.jsx";
import RegisterPages from "./RegisterPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
