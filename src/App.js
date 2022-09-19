import React from "react";
import {Route, Routes } from "react-router-dom"
import "./index.css"
import Home from "./routes/Home.js"
import Contact from "./routes/Contact"
import About from "./routes/About"
import Projects from "./routes/Projects"


function App() {
  return (
   <React.Fragment>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />

    </Routes>
    </React.Fragment>
  );
}

export default App;
