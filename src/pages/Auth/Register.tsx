// src/pages/Auth/Register.tsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../services/authService';
import { AuthResponse, RegisterData, UserRole } from '../../types';
import useAuth from '../../hooks/useAuth';
import styles from './styles/Register.module.css';

const Register: React.FC = () => {
  const [data, setData] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
    conf_password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (data.password !== data.conf_password) {
      setError("Passwords do not match. Please try again.");
      return;
    }
  
    try {
      const response: AuthResponse = await register(data);
      setUser(response.user, response.token);
      navigate('/');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h2>Guest Register</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={data.name} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={data.email} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={data.password} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Confirm Password:</label>
          <input type="password" name="conf_password" value={data.conf_password} onChange={handleChange} required />
        </div>
 
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login Here</Link>
      </p>
      
    </div>
  );
};

export default Register;