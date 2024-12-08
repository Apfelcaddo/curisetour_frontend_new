// src/utils/tokenUtils.ts

export const getToken = (): string | null => {
    return localStorage.getItem('token');
  };

  // src/utils/authToken.ts

export const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken');
};