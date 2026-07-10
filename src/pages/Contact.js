import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-container">

        <div className="contact-info">

          <h1>Contact Me</h1>

          <p>
            I'm always open to discussing new opportunities,
            AI projects, internships, or collaborations.
            Feel free to reach out!
          </p>

          <div className="info">
            <h3>📧 Email</h3>
            <p>sirichowdhary65@gmail.com</p>
          </div>

          <div className="info">
            <h3>💼 LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/siri-bollineni"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/siri-bollineni
            </a>
          </div>

          <div className="info">
            <h3>💻 GitHub</h3>
            <a
              href="https://github.com/siri-jpg"
              target="_blank"
              rel="noreferrer"
            >
              github.com/siri-jpg
            </a>
          </div>

        </div>

        <div className="contact-form">

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;