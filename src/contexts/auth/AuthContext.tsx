import { createContext } from 'react';

import { User } from '../../@types/accounts/User';

interface Auth {
  identifier: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  signin: (data: Auth) => Promise<boolean>;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);
