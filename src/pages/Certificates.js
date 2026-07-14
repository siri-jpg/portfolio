import React from "react";
import "./Certificates.css";

function Certificates() {
  return (
    <section className="certificates">
      <h1 className="certificates-title">Certifications</h1>

      <div className="certificate-container">

        <div className="certificate-card">
          <h2>Web development</h2>

          <p>
           Completed an industry-oriented Web Development Mentorship Program with Launched Global, focusing on creating responsive and user-friendly web applications. Gained practical experience in front-end development, version control, and modern web development practices while strengthening problem-solving and teamwork skills.
          </p>

          <span>Launched Global</span>

          <a
            href="https://drive.google.com/file/d/1UosEwYJKb9ffyGAkl9KAYAdmGni8BI0u/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>

        <div className="certificate-card">
          <h2>ML Using Python</h2>

          <p>
           Successfully completed the Machine Learning Using Python certification, gaining hands-on experience in data preprocessing, exploratory data analysis, model development, and performance evaluation using Python. Strengthened my understanding of supervised and unsupervised learning techniques while developing practical skills to build intelligent, data-driven solutions for real-world applications.
          </p>

          <span>Simplylearn</span>

          <a
            href="https://drive.google.com/file/d/1_9DdHc65ObWMHjPe8b5otU9XnWOwqdA9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate 
          </a>
        </div>

        <div className="certificate-card">
          <h2> Introduction to Generative AI Studio</h2>

          <p>
            Completed the Introduction to Generative AI Studio certification, strengthening my understanding of Generative AI fundamentals, prompt engineering, large language models (LLMs), and AI application development. Gained hands-on experience using AI Studio to prototype and experiment with AI-driven solutions.
          </p>

          <span>Google Cloud</span>

          <a
            href="https://drive.google.com/file/d/1NSHr3GL-gnGGSK5y8BScNkT_GLTU3TLU/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>

        

     

      </div>
    </section>
  );
}

export default Certificates;
