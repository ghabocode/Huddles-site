import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import Grow from "./Components/Grow.jsx";
import Flowing from "./Components/Flowing.jsx";
import Users from "./Components/Users.jsx";
import Ready from "./Components/Ready.jsx";
import Footer from "./Components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
