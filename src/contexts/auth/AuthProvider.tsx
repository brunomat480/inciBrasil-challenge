import { ReactNode, useEffect, useState } from 'react';

import { User } from '../../@types/accounts/User';
// import { User } from '../../@types/accounts/User';
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
  // const [token, setToken] = useState('');

  useEffect(() => {
    async function validateToken() {
      const storageData = localStorage.getItem('authToken');

      if (storageData) {
        const data = await authService.validateToken(storageData);

        if (data.user) {
          setUser(data.user);
          // setToken(data.user.token);
        }
      }
    }

    validateToken();
  }, []);

  async function signin({ email, password }: AuthDataType) {
    const data = await authService.signin({ email, password });

    if (data.user.token && data.user) {
      setUser(data.user);
      addToken(data.user.token);

      return true;
    }

    return false;
  }

  async function signout() {
    setUser(null);
    addToken('');
  }

  function addToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
