import React from 'react';
import ReactDOM from 'react-dom/client';

import './globals.css';
import Home from './routes/Home.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
