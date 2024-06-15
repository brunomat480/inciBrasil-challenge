import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

import { Router } from './Router';

export function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Toaster richColors />
        <Helmet titleTemplate="%s | Inci Brasil" />
        <Router />
      </HelmetProvider>
    </BrowserRouter>
  );
}
