import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';

export function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Helmet titleTemplate="%s | InciBrasil" />
        <Router />
      </HelmetProvider>
    </BrowserRouter>
  );
}
