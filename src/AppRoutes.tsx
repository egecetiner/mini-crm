import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { UserListPage } from './pages/UserListPage';
import { UserDetailPage } from './pages/UserDetailPage';
import { AddUserModalPage } from './pages/AddUserModal';
import { useUsers } from './context/useUsers';

export const AppRoutes: React.FC = () => {
  const { addUser } = useUsers();
  const location = useLocation();
  const navigate = useNavigate();
  // Modal route logic
  const state = location.state as { backgroundLocation?: Location };
  const background = state && state.backgroundLocation;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<UserListPage onAddUserClick={() => navigate('/users/new', { state: { backgroundLocation: location } })} />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
      </Routes>
      {/* Modal route */}
      <Routes>
        <Route path="/users/new" element={
          <AddUserModalPage
            open={true}
            onClose={() => navigate(background ? background.pathname : '/', { replace: true })}
            onAddUser={addUser}
          />
        } />
      </Routes>
    </>
  );
}; 