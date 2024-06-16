import { createContext } from 'react';

import { User } from '../../@types/accounts/User';

interface Auth {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  signin: (data: Auth) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType>(null!);
