import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/public/Home';
import { SignIn } from './pages/public/SignIn';
import { PlataformGroup } from './pages/private/PlataformGroup';
import { PlataformLayout } from './pages/private/_layouts/PlataformLayout';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />

      <Route path='/plataforms' element={<PlataformLayout />}>
        <Route path='/plataforms' element={<PlataformGroup />} />
      </Route>
    </Routes>
  );
}