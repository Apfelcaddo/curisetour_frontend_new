// src/components/common/Button/Button.tsx

import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
