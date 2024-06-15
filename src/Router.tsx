import { Route, Routes } from 'react-router-dom';

import { PlataformGroup } from './pages/private/PlataformGroup';
import { Home } from './pages/public/Home';
import { SignIn } from './pages/public/SignIn';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />

      <Route path="/plataforms" element={<PlataformGroup />} />
    </Routes>
  );
}
