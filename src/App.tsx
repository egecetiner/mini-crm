import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './context/UsersContext';
import { AppRoutes } from './AppRoutes';

const App: React.FC = () => (
  <BrowserRouter>
    <UsersProvider>
      <AppRoutes />
    </UsersProvider>
  </BrowserRouter>
);

export default App;
