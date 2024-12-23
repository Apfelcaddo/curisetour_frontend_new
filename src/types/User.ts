// src/types/User.ts

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'customer' | 'employee';
    // Add other relevant fields
  }