// src/pages/Dashboard/CustomerDashboard.tsx
import React from 'react';
import {useAuth} from '../../hooks/useAuth';
import TourList from '../Tours/TourList';
import styles from './styles/CustomerDashboard.module.css';


const CustomerDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Customer Dashboard</h1>
      <p className={styles.welcome}>Welcome, {user?.name}!</p>
      <TourList />
      {/* Add customer-specific functionalities */}
    </div>
  );
};

export default CustomerDashboard;