import React from "react";
import { Link } from "react-router-dom";
import "./About.css"
function About(){
return (
    <section className="about" id="about">
      <div className="about-card">
        <div className="about-container">

          <div className="about-image">
            <img
              src="/profile.jpg"
              alt="Profile"
            />
          </div>

          <div className="about-content">
            <h1>About Me</h1>

            <h2>AI & Full Stack Developer</h2>

            <p>
              Hi, I'm <strong>Siri Bollineni</strong>, a Computer Science
              student passionate about Artificial Intelligence, Machine Learning,
              and Full Stack Development. I enjoy building modern web
              applications and solving real-world problems with technology.
            </p>

            <div className="skills">
              <div className="skill-card">React</div>
              <div className="skill-card">JavaScript</div>
              <div className="skill-card">Java</div>
              <div className="skill-card">Python</div>
              <div className="skill-card">Firebase</div>
              <div className="skill-card"> ML Using Python</div>
               <div className="skill-card">Generative AI</div>
               <div className="skill-card">HTML</div>
               <div className="skill-card">css</div>
            </div>

            <div className="about-buttons">
              <a href="https://drive.google.com/file/d/1PsS9kQOwf7ZUXyw-0rP1KtF_L-3Fiu7L/view?usp=drive_link" className="btn primary-btn">
                Download Resume
              </a>

             <Link to="/contact" className="btn secondary">
                         Contact Me....
                        </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;