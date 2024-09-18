import React from 'react';
import footer from '../../Asset/Images/footer.png';
import './Footer.css';

const companyLinks = ['Home', 'Placements', 'Our Plan', 'Contact Us'];
const trendingCourses = ['About Us', 'Contact Us', 'Support'];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
       
        <div className="footer-section">
          <div className="footer-logo">
            <img src={footer} alt="Logo"/>
            <p>
              MathTech- Provides a wide group of opportunities for freshers and experienced candidates 
              who can develop their skills and build their career opportunities across multiple companies.
            </p>
          </div>
        </div>

       
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            {companyLinks.map((item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            {trendingCourses.map((course, index) => (
              <li key={index}>
                <a href="#">{course}</a>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="footer-section">
          <h4>CONTACT INFO</h4>
          <p>112.Countour Glen,Glasgow</p>
          <p>United Kingdom</p>
          <p>Email: rasiya25@gmail.com</p>
        </div>
        
      </div>

      
      <div className="footer-bottom">
        <div>
          <p>Copyright © 2024 Rasiya. All Rights Reserved</p>
        </div>
        <div>
          <p>Privacy Policy | Terms of Use | Refund Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
