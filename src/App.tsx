import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import { router } from './routes';

// ── Roboto — full weight range (100-900) ──
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/200.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/600.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/800.css';
import '@fontsource/roboto/900.css';

// ── Poppins — full weight range (100-900) ──
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

// ── Heebo — variable font, Hebrew support (100-900) ──
import '@fontsource-variable/heebo';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
};

export default App;
