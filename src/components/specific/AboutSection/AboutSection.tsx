// src/components/specific/AboutSection/AboutSection.tsx
import React from 'react';
import styles from './styles.module.css';
import aboutImage from '../../../assets/images/about.jpg'; // Add your about image here

const AboutSection: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.imageContainer}>
        <img src={aboutImage} alt="About Us" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2>About Us</h2>
        <p>
          At NYU Cruise Line, we are committed to delivering exceptional cruise experiences. Our dedicated team ensures that every journey is comfortable, luxurious, and filled with unforgettable moments.
        </p>
        <p>
          Whether you're seeking relaxation, adventure, or exploration, our diverse range of tours caters to all preferences, promising an unparalleled voyage every time.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;