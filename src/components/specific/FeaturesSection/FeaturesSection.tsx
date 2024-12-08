// src/components/specific/FeaturesSection/FeaturesSection.tsx
import React from 'react';
import styles from './styles.module.css';
import { FaShip, FaMapMarkerAlt, FaUmbrellaBeach, FaCocktail } from 'react-icons/fa';

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaShip size={40} color="#007bff" />,
    title: 'Modern Fleet',
    description: 'Our state-of-the-art ships offer unparalleled comfort and luxury for all travelers.',
  },
  {
    icon: <FaMapMarkerAlt size={40} color="#007bff" />,
    title: 'Exotic Destinations',
    description: 'Explore the most beautiful and remote locations around the world with our curated tours.',
  },
  {
    icon: <FaUmbrellaBeach size={40} color="#007bff" />,
    title: 'All-Inclusive Packages',
    description: 'Enjoy a hassle-free vacation with our all-inclusive packages covering accommodation, meals, and activities.',
  },
  {
    icon: <FaCocktail size={40} color="#007bff" />,
    title: 'Exceptional Service',
    description: 'Our dedicated staff ensures that every aspect of your journey is seamless and enjoyable.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className={styles.features}>
      <h2>Our Features</h2>
      <div className={styles.featuresContainer}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;