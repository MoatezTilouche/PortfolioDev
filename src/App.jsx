import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'flowbite';

import ResponsiveAppBar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";
import "./index.css";
import Skills from "./components/skills";

function App() {
  return (
    <Router>
      {/* Navbar is always visible */}
      <ResponsiveAppBar />

      {/* Define routes for each section */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/services" id="services" element={<Services />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
