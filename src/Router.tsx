import { Route, Routes } from 'react-router-dom';

import { RequireAuth } from './contexts/auth/RequireAuth';
import { PlatformGroup } from './pages/private/PlataformGroup';
import { Home } from './pages/public/Home';
import { SignIn } from './pages/public/SignIn';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />

      <Route
        path="/platforms"
        element={
          <RequireAuth>
            <PlatformGroup />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
