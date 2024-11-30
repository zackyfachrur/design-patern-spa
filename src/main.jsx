import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import LoginPages from "./LoginPage.jsx";
import RegisterPages from "./RegisterPage.jsx";
import HomePages from "./HomePage.jsx";
import NavbarComponents from "./NavbarComponent.jsx";
import FooterComponents from "./FooterComponent.jsx";
import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavbarComponents />
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/" element={<HomePages />} />
      </Routes>
    </BrowserRouter>
    <FooterComponents />
  </StrictMode>
);
