// src/pages/Dashboard/EmployeeDashboard.tsx
import React from 'react';
import useAuth from '../../hooks/useAuth';
import TourList from '../Tours/TourList';
import { ROLES } from '../../utils/constants';

const EmployeeDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
      <TourList isAdmin />
      {/* Add employee-specific functionalities */}
    </div>
  );
};

export default EmployeeDashboard;