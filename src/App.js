import React from "react";
import Headpart from "./Headerpart";
import Home from "./Home";
import Footer from "./footer";
import { Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Headpart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
