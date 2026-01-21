import { User } from 'lucide-react';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <User className="section-icon" />
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">
          <p className="about-text">
            I am a Java Full Stack Developer with strong knowledge of Core Java, OOP concepts,
            Spring Boot, and modern frontend technologies like React.js. I enjoy building responsive,
            scalable, and user-friendly web applications, and I have hands-on experience in frontend
            and backend development, databases, REST APIs, and version control.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
