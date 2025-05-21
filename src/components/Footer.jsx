import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="saga-section">
          <h3>Saga</h3>
          <p>Your tagline or info here</p>
          <div className="social-icons">
            <a href="#"><img src={require("../assets/linkedin_icon.png")} alt="linkedin" /></a>
            <a href="#"><img src={require("../assets/twitter.png")} alt="Twitter" /></a>
            <a href="#"><img src={require("../assets/instagram.png")} alt="Instagram" /></a>
          </div>
        </div>
        <div className="contact-section">
          <h3>Contact</h3>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
