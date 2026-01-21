import { Download, Code } from 'lucide-react';

function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-subtitle">Hi, I'm SIVA KRISHNA </span>
            Java Full Stack Developer
          </h1>
          <p className="hero-tagline">
            Building Scalable Full Stack Applications with Java & React
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToProjects} className="btn btn-secondary">
              <Code size={20} />
              View Projects
            </button>
            <a
              href="./assets/Resume.pdf"
              download="Resume.pdf"
              className="btn btn-primary"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
