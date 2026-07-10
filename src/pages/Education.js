import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education">
      <h1 className="education-title">Education</h1>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="education-card">
            <h2>B.Tech - Computer Science and Engineering</h2>
            <h3>VIT-AP University</h3>
            <span>2024 - Present</span>

            <p>
              Currently pursuing Bachelor of Technology in Computer Science
              Engineering with a strong interest in Artificial Intelligence,
              Machine Learning and Full Stack Development.
            </p>

            <h4>CGPA: 8.45</h4>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="education-card">
            <h2>Intermediate (MPC)</h2>
            <h3>narayana Junior College</h3>
            <span>2021 - 2023</span>

            <p>
              Mathematics, Physics and Chemistry with a strong academic
              foundation.
            </p>

            <h4>Percentage: 89.6%</h4>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="education-card">
            <h2>Secondary School (SSC)</h2>
            <h3>Hyderabad public school</h3>
            <span>2020 - 2021</span>

            <p>
              Completed secondary education with excellent academic performance.
            </p>

            <h4>Percentage: 99.4%</h4>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;