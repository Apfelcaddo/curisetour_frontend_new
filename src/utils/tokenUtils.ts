// src/utils/tokenUtils.ts

export const getToken = (): string | null => {
    return localStorage.getItem('token');
  };