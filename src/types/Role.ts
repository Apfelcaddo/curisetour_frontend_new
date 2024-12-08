// src/types/User.ts

export type UserRole = 'customer' | 'employee';

import { UserRole } from './Role';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  // Add other relevant fields
}