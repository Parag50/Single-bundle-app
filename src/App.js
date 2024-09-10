import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Job from "./pages/Job";
import logo from './assets/images/logo.png'; // Import the image

function App() {
  return (
    <Router>
      <Header />
      <img src={logo} alt="Logo" style={{ width: '200px', height: '100px' }} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job" element={<Job />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
