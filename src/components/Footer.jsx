import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <span className="footer-logo-main">MOMO</span>
          <span className="footer-logo-sub">Human-Buffalo Nexus</span>
        </div>
        <div className="footer-links">
          <a href="#translator" className="footer-link">Translator</a>
          <a href="#matrimonial" className="footer-link">Matrimonial</a>
          <a href="#linkedin" className="footer-link">LinkedIn</a>
          <a href="#community" className="footer-link">Community</a>
        </div>
        <div className="footer-socials">
          <a href="#" className="social-icon" aria-label="Facebook">F</a>
          <a href="#" className="social-icon" aria-label="Twitter">T</a>
          <a href="#" className="social-icon" aria-label="Instagram">I</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MOMO Nexus. All Rights Reserved. For entertainment purposes only.</p>
        <p className="malayalam-quote">
          "പോത്തിന്റെ ചെവിയിൽ വേദം ഓതിട്ട് കാര്യം ഇല്ല" - Not anymore!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
