// src/utils/validators.ts

// Validate Email
export const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };
  
  // Validate Password (e.g., minimum 6 characters)
  export const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };
  
  // Add more validator functions as needed