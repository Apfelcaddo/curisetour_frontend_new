// src/pages/Dashboard/CustomerDashboard.tsx
import React from 'react';
import useAuth from '../../hooks/useAuth';
import TourList from '../Tours/TourList';

const CustomerDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Customer Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
      <TourList />
      {/* Add customer-specific functionalities */}
    </div>
  );
};

export default CustomerDashboard;