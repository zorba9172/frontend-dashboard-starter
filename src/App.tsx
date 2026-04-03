import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import { router } from './routes';
import './theme/fonts';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
};

export default App;
