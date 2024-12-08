// src/pages/Home/Home.tsx
import React from 'react';
import styles from './styles/Home.module.css';

// Import specific components for home page sections
import HeroSection from '../../components/specific/HeroSection/HeroSection';
import AboutSection from '../../components/specific/AboutSection/AboutSection';
import FeaturesSection from '../../components/specific/FeaturesSection/FeaturesSection';
import TestimonialsSection from '../../components/specific/TestimonialsSection/TestimonialsSection';
import CTASection from '../../components/specific/CTASection/CTASection';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;