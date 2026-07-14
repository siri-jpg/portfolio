import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates"

function App() {
  return (
    <Router>

      <nav className="navbar">

        <div className="logo">
          PORTFOLIO
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to ="/Education">Education</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Certificates">Certifications</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
        </ul>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  );
}

export default App;

