import { ReactNode, useState } from 'react';

import { User } from '../../@types/accounts/User';
import { authService } from '../../services/accounts/auth';
import { AuthContext } from './AuthContext';

interface AuthDataType {
  email: string;
  password: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  async function signin({ email, password }: AuthDataType) {
    const data = await authService.signin({ email, password });

    if (data.token) {
      setUser(data.token);

      return true;
    }

    return false;
  }

  console.log(user);

  return (
    <AuthContext.Provider value={{ user, signin }}>
      {children}
    </AuthContext.Provider>
  );
}
