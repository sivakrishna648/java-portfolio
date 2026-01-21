import { Code, Server, Database, Wrench } from 'lucide-react';

function Skills() {
  const skillsData = [
    {
      category: 'Programming Languages',
      icon: <Code className="skill-category-icon" />,
      skills: ['Java (Core Java, OOP Concepts)', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Back-End Frameworks',
      icon: <Server className="skill-category-icon" />,
      skills: ['Spring Boot']
    },
    {
      category: 'Front-End Frameworks',
      icon: <Code className="skill-category-icon" />,
      skills: ['React.js', 'Bootstrap']
    },
    {
      category: 'Databases',
      icon: <Database className="skill-category-icon" />,
      skills: ['MySQL', 'PostgreSQL']
    },
    {
      category: 'Tools / Platforms',
      icon: <Wrench className="skill-category-icon" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Eclipse']
    },
    {
      category: 'Web Services / Tools',
      icon: <Server className="skill-category-icon" />,
      skills: ['RESTful APIs', 'JSON']
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <Code className="section-icon" />
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header">
                {skillGroup.icon}
                <h3 className="skill-category">{skillGroup.category}</h3>
              </div>
              <div className="skill-list">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
