// src/components/layout/Footer.tsx
import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Support</h3>
          <ul>
            <li>
              <Link to="/help">Help Center</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Follow Us</h3>
          <ul className={styles.socialLinks}>
            <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
                </a>
            </li>
            <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
                </a>
            </li>
            <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                </a>
            </li>
            </ul>
        </div>
      </div>
      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} [NYU Cruise Line]. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;