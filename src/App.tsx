// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import styles from "./Home/styles/home.module.css";
import ForgotPassword from './pages/Auth/ForgotPassword';
import Login from './pages/Auth/Login';
import Emplogin from './pages/Auth/EmpLogin'
import Register from './pages/Auth/Register';
import CustomerDashboard from './pages/Dashboard/CustomerDashboard';
import EmployeeDashboard from './pages/Dashboard/EmployeeDashboard';
import CreateTour from './pages/Tours/CreateTour'
import TourList from './pages/Tours/TourList';

// import CreateTour from './pages/Tours/CreateTour';
// import EditTour from './pages/Tours/EditTour';
import Unauthorized from './pages/Unauthorized'; // Updated path
// import UserProfile from './pages/Profile/UserProfile';
import ProtectedRoute from './components/common/ProtectedRoute';
import { ROLES } from './utils/constants';
import { AuthProvider } from './hooks/useAuth';

const App: React.FC = () => {
  return (
    <AuthProvider>
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/EmpLogin" element={<Emplogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Unauthorized Access Route */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard/customer"
          element={
            // <ProtectedRoute roles={[ROLES.CUSTOMER]}>
            //   <CustomerDashboard />
            // </ProtectedRoute>
            <CustomerDashboard />
          }
        />
        <Route
          path="/dashboard/employee"
          element={
            // <ProtectedRoute roles={[ROLES.EMPLOYEE]}>
            //   <EmployeeDashboard />
            // </ProtectedRoute>
            <EmployeeDashboard />
          }
        />
        
        {<Route
          path="/tours/create"
          element={
            // <ProtectedRoute roles={[ROLES.EMPLOYEE]}>
            //   <CreateTour />
            // </ProtectedRoute>
            <CreateTour />
          }
        />
        /*
        <Route
          path="/tours/edit/:id"
          element={
            <ProtectedRoute roles={[ROLES.EMPLOYEE]}>
              <EditTour />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        /> */}

        {/* Public Route Example */}
        <Route path="/tours" element={<TourList />} />
          
        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
    </AuthProvider>
  );
};

export default App;