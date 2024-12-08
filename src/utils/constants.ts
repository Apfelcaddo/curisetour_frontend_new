// src/utils/constants.ts

// User Roles
export const ROLES = {
  CUSTOMER: 'customer',
  EMPLOYEE: 'employee',
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];

// API Endpoints
export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  TOURS: '/tours',
  // Add other endpoints as needed
} as const;

// Other Constants
export const ITEMS_PER_PAGE = 10;

// Add more constants as necessary