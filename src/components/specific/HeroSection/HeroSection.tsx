// src/components/specific/HeroSection/HeroSection.tsx
import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/images/hero.jpg'; // Add your hero image here

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Embark on Your Dream Cruise</h1>
        <p>
          Experience the luxury and adventure of cruising to the most breathtaking destinations around the world.
        </p>
        <Link to="/tours">
          <button className={styles.ctaButton}>Explore Tours</button>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <img src={heroImage} alt="Cruise Ship" className={styles.image} />
      </div>
    </section>
  );
};

export default HeroSection;