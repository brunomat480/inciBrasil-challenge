import { useContext } from 'react';

import { SignIn } from '../../pages/public/SignIn';
import { AuthContext } from './AuthContext';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <SignIn />;
  }

  return children;
}
