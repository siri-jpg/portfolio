import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">

      <div className="hero-content">

        <p className="intro">Hello, I'm</p>

        <h1>
          Siri <span>Bollineni</span>
        </h1>

        <h2></h2>

        <p className="description">
          Computer Science student passionate about Artificial Intelligence,
          Machine Learning and Full Stack Development. I enjoy creating modern,
          responsive and intelligent web applications. moreover i love going towards modren era which Artficial intelligence
        </p>

        <div className="buttons">

         <Link to="/about" className="btn primary">
          About Me
         </Link>

          <Link to="/contact" className="btn secondary">
            Contact Me
           </Link>

        </div>

      </div>

      <div className="hero-image">

        <div className="glow-circle"></div>

        <img
          src="/profile.jpg"
          alt="Profile"
        />

      </div>

    </section>
  );
}

export default Home;