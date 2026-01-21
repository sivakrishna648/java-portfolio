import { Briefcase, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'Lenskart E-Commerce Clone',
      description: [
        'Developed a responsive e-commerce web application clone of Lenskart using HTML, CSS, JavaScript, and React.js.',
        'Implemented product listing, filtering, and shopping cart functionality with dynamic UI updates.',
        'Built reusable React components and managed state using React Hooks.',
        'Ensured responsiveness across desktop and mobile devices.'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      github: 'https://github.com/sivakrishna648/Lenskart'
    },
    {
      title: 'Ticket Booking System (Console Application)',
      description: [
        'Developed a console-based Ticket Booking System using Core Java and OOP concepts.',
        'Implemented booking, cancellation, and viewing features with validation.',
        'Used modular programming and exception handling.'
      ],
      techStack: ['Core Java', 'OOP'],
      github: '#'
    },
    {
      title: 'Virtual Mouse Using Hand Gesture Recognition',
      description: [
        'Designed gesture recognition for human-computer interaction.',
        'Used OpenCV for preprocessing and contour detection.',
        'Integrated real-time hand landmark detection.',
        'Developed gestures for drag, drop, right-click, and double-click.'
      ],
      techStack: ['Python', 'OpenCV', 'Computer Vision'],
      github: 'https://github.com/sivakrishna648/VirtualMouse',
      timeline: 'Aug 2024 – Dec 2024'
    },
    {
      title: 'Fraudulent Transactions Detection Using XGBoost',
      description: [
        'Built an XGBoost model for fraud detection.',
        'Performed feature engineering and handled class imbalance.',
        'Used SQL for data extraction.',
        'Deployed using Flask with real-time alerts.',
        'Built a dashboard for fraud visualization.'
      ],
      techStack: ['Python', 'XGBoost', 'SQL', 'Flask'],
      github: 'https://github.com/sivakrishna648/fraud-detection-app',
      timeline: 'Dec 2024 – May 2025'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <Briefcase className="section-icon" />
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-header">
                <h3 className="project-title">{project.title}</h3>
                {project.timeline && (
                  <span className="project-timeline">{project.timeline}</span>
                )}
              </div>
              <ul className="project-description">
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
              <div className="project-tech">
                <strong>Tech Stack:</strong>
                <div className="tech-tags">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <a
                href={project.github}
                className="project-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
