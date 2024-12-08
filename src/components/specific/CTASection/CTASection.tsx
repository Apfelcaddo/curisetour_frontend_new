// src/components/specific/CTASection/CTASection.tsx
import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className={styles.cta}>
      <h2>Ready to Set Sail?</h2>
      <p>Join us for an unforgettable cruise experience. Book your tour today!</p>
      <Link to="/tours">
        <button className={styles.ctaButton}>Book Now</button>
      </Link>
    </section>
  );
};

export default CTASection;