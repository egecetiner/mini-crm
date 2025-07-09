import React from 'react';
import { UserList } from '../components/UserList';

interface UserListPageProps {
  onAddUserClick: () => void;
}

export const UserListPage: React.FC<UserListPageProps> = ({ onAddUserClick }) => {
  return <UserList onAddUserClick={onAddUserClick} />;
}; 