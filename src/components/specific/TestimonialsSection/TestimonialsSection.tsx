// src/components/specific/TestimonialsSection/TestimonialsSection.tsx
import React from 'react';
import styles from './styles.module.css';
import testimonial1 from '../../../assets/images/about.jpg';
import testimonial2 from '../../../assets/images/about.jpg';
import testimonial3 from '../../../assets/images/about.jpg';

interface Testimonial {
  image: string;
  name: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    image: testimonial1,
    name: 'John Doe',
    review:
      'The cruise experience was absolutely amazing! The staff were incredibly friendly and the destinations were breathtaking.',
  },
  {
    image: testimonial2,
    name: 'Jane Smith',
    review:
      'A perfect getaway! Everything was well-organized, and I made memories that will last a lifetime.',
  },
  {
    image: testimonial3,
    name: 'Emily Johnson',
    review:
      'Luxury and comfort combined with exciting adventures. Highly recommend [Your Company Name] for your next vacation.',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Customers Say</h2>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <img src={testimonial.image} alt={testimonial.name} className={styles.image} />
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;