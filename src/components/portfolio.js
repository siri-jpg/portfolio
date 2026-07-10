import { Mail, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: "center" }}
      >
        <h1>Siri Bollineni</h1>
        <p>Computer Science Student | Aspiring AI Developer</p>

        <div style={{ marginTop: "10px" }}>
          <p><Mail size={16}/> sirichowdhary65@gmail.com</p>
          <p><Phone size={16}/> 6301591785</p>
          <p><Linkedin size={16}/> linkedin.com/in/siribollineni</p>
        </div>
      </motion.div>

      <hr/>

      <h2>About Me</h2>
      <p>
        I am a B.Tech Computer Science student at VIT-AP University with a strong
        interest in Artificial Intelligence and machine learning. I enjoy building
        real-world AI solutions and working on innovative technology projects.
      </p>

      <h2>Education</h2>
      <p>
        B.Tech Computer Science – VIT-AP University <br/>
        Expected Graduation: May 2028 <br/>
        CGPA: 8.45
      </p>

      <h2>Skills</h2>
      <ul>
        <li>Python</li>
        <li>Java</li>
        <li>Git</li>
        <li>Jupyter Notebook</li>
        <li>VS Code</li>
        <li>Google Colab</li>
      </ul>

      <h2>Projects</h2>
      <h3>Sign Language Translator</h3>
      <p>
        AI-based system that detects sign language gestures and converts them
        into readable text using computer vision and machine learning.
      </p>

    </div>
  );
}

export default Portfolio;