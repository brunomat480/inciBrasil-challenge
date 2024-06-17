import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

import { AuthProvider } from './contexts/auth/AuthProvider';
import { Router } from './Router';

export function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <AuthProvider>
          <Toaster richColors position="top-right" />
          <Helmet titleTemplate="%s | Inci Brasil" />
          <Router />
        </AuthProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}
