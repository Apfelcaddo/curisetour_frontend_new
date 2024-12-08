import React, { useState } from 'react';
import styles from './styles/ForgotPassword.module.css';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you would implement the logic to send the reset password email
    console.log('Resetting password for:', email);
  };

  return (
    <div className={styles.container}>
      <h2>Forgot Your Password?</h2>
      <p>
        Enter the e-mail address for your account and we'll send you a
        link to reset your password. If you don't receive this email, please
        check your spam or junk email folder.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={styles.submitButton}>
          Request Password Reset
        </button>
      </form>
      <p>
       <Link to="/"> Cancel </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;