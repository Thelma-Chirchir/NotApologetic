// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import About from "./components/about";
import Footer from "./components/Footer";
import Home from "./components/home";
import Contact from "./components/contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Shop />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
