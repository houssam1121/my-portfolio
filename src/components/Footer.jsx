import { useState, useEffect } from "react";
import "./../styles/Footer.css";

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about" className="footer-link">About</a>
        <a href="#projects" className="footer-link">Projects</a>
        <a href="#contact" className="footer-link">Contact</a>
        <a href="/blog" className="footer-link">Blog</a>
      </div>

      <div className="social-links">
        <a href="https://github.com" className="social-link" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com" className="social-link" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://dribbble.com" className="social-link" aria-label="Dribbble">
          <i className="fab fa-dribbble"></i>
        </a>
      </div>

      <p>&copy; {new Date().getFullYear()} Houssam. All rights reserved.</p>

      {showBackToTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
    </footer>
  );
}

export default Footer;