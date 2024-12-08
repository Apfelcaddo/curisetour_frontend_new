// src/pages/Auth/Login.tsx

import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { login } from '../../services/authService';
import { AuthResponse, LoginCredentials } from '../../types';
import useAuth from '../../hooks/useAuth';
import styles from './styles/Login.module.css';

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response: AuthResponse = await login(credentials);
      setUser(response.user, response.token);
      // Redirect based on role or previous location
      const from = (location.state as any)?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Guest Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
      <p>
        Forgot Password? <Link to="/forgot-password">Reset Here</Link>
      </p>
      <p>
        Don't have an account? <Link to="/register">Register Here</Link>
      </p>
      <p>
        Employee <Link to="/EmpLogin">Login Here</Link>
      </p>
    </div>
  );
};

export default Login;