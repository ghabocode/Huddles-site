import { useState } from "react";
import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Grow from "./Components/Grow";
import Flowing from "./Components/Flowing";
import Users from "./Components/Users";
import Ready from "./Components/Ready";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Grow />
      <Flowing />
      <Users />
      <Ready />
      <Footer />
    </>
  );
}

export default App;
