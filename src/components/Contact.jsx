import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import "./../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Let's Connect</h2>
        <p className="subtitle">Reach out through these platforms</p>
        
        <div className="social-grid">
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/houssam-masri-7b4b29269/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-card linkedin"
            aria-label="LinkedIn"
          >
            <div className="social-icon">
              <FaLinkedinIn />
            </div>
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/houssam1121" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-card github"
            aria-label="GitHub"
          >
            <div className="social-icon">
              <FaGithub />
            </div>
            <span>GitHub</span>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/+96178901861" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-card whatsapp"
            aria-label="WhatsApp"
          >
            <div className="social-icon">
              <FaWhatsapp />
            </div>
            <span>WhatsApp</span>
          </a>

          {/* Email */}
          <a 
            href="mailto:houssammasri102@gmail.com" 
            className="social-card email"
            aria-label="Email"
          >
            <div className="social-icon">
              <FaEnvelope />
            </div>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;