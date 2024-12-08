// src/components/layout/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import logo from '../../assets/images/logo.png'; // Ensure this path is correct
import useAuth from '../../hooks/useAuth';
import { ROLES } from '../../utils/constants'; // Assuming you have defined roles in constants

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Company Logo" className={styles.logo} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/tours">Tours</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {/* Conditional Links Based on Authentication and Role */}
          {!user ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              {user.role === ROLES.CUSTOMER && (
                <li>
                  <Link to="/dashboard/customer">Dashboard</Link>
                </li>
              )}
              {user.role === ROLES.EMPLOYEE && (
                <>
                  <li>
                    <Link to="/dashboard/employee">Employee Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/tours/create">Create Tour</Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout} className={styles.logoutButton}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;