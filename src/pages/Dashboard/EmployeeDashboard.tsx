// src/pages/Dashboard/EmployeeDashboard.tsx
import React from 'react';
import useAuth from '../../hooks/useAuth';
import TourList from '../Tours/TourList';
import styles from './styles/EmployeeDashboard.module.css';

const EmployeeDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <h1 className={styles.title} >Employee Dashboard</h1>
      <p className={styles.welcome} >Welcome, {user?.name}!</p>
      <TourList isAdmin />
      {/* Add employee-specific functionalities */}
    </div>
  );
};

export default EmployeeDashboard;