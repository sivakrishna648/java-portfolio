import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { FormEvent, useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Form submission functionality can be integrated with your preferred backend service.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <Mail className="section-icon" />
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <a
              href="/assets/Resume.pdf"
              download="Resume.pdf"
              className="btn btn-outline"
            >
              <Download size={20} />
              Download Resume
            </a>

            <div className="social-links">
              <a href="https://github.com/sivakrishna648" className="social-link" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sivakrishna-gudipudi-670015247/" className="social-link" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
