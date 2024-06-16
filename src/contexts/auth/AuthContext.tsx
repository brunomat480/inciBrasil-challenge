import { createContext } from 'react';

import { User } from '../../@types/accounts/User';

interface Auth {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  // token: string | undefined;
  // user: string | undefined;
  signin: (data: Auth) => Promise<boolean>;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);
