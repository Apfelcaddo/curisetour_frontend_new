// src/services/authService.ts

import axios from 'axios';
import { User } from '../types/User';

// Define the base URL for your authentication API
const API_URL = '/api/auth'; // Adjust this based on your backend configuration

// Function to log in a user
export const login = async (email: string, password: string): Promise<{ user: User; token: string }> => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { user, token } = response.data;

    // Store the authentication token (e.g., JWT) in localStorage or a secure storage
    localStorage.setItem('authToken', token);

    return { user, token };
  } catch (error: any) {
    // Handle errors appropriately
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Login failed. Please try again.');
    }
  }
};


// Function to register a new user
export const register = async (
  name: string,
  email: string,
  password: string
): Promise<{ user: User; token: string }> => {
  try {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    const { user, token } = response.data;

    // Store the authentication token (e.g., JWT) in localStorage or a secure storage
    localStorage.setItem('authToken', token);

    return { user, token };
  } catch (error: any) {
    // Handle errors appropriately
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Registration failed. Please try again.');
    }
  }
};

// Function to get the current authenticated user
export const getCurrentUser = async (): Promise<User> => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await axios.get<User>(`${API_URL}/current`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Function to log out the user
export const logoutUser = async (): Promise<void> => {
  const token = localStorage.getItem('authToken');
  if (token) {
    await axios.post(
      `${API_URL}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.removeItem('authToken');
  }
};