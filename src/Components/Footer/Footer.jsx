// AdvancedFooter.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';
// In a JavaScript/JSX file
import '/Users/Fahim/projects/e-shop/node_modules/font-awesome/css/font-awesome.css';


function Footer() {
  return (
    <footer className="advanced-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Your company's mission and description go here.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Subscribe</h3>
            <p>Stay updated with our newsletter.</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
