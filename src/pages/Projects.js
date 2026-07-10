import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">

      <h1 className="projects-title">My Projects</h1>

      <div className="projects-container">

        <div className="project-card">
          <h2>🤖 AI Study Buddy</h2>

          <p>
            An AI-powered study assistant that answers questions,
            summarizes notes, and helps students prepare for exams.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Gemini API</span>
            <span>Firebase</span>
          </div>

          
        </div>

        <div className="project-card">
          <h2>🛡️ ANN-Based DDoS Detection</h2>

          <p>
            Detects Distributed Denial-of-Service attacks using an
            Artificial Neural Network with forensic validation.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>ANN</span>
            <span>Machine Learning</span>
          </div>

          
        </div>

        <div className="project-card">
          <h2>🌐 Portfolio Website</h2>

          <p>
            A responsive portfolio built using React featuring
            modern UI, animations, and smooth navigation.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

        </div>

        <div className="project-card">
          <h2>✋ Sign Language Translator</h2>

          <p>
            Converts sign language gestures into readable text using
            Artificial Intelligence.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>Flask</span>
            <span>Firebase</span>
          </div>

          
        </div>

      </div>

    </section>
  );
}

export default Projects;