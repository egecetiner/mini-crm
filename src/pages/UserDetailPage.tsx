import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUsers } from '../context/useUsers';
import { UserDetail } from '../components/UserDetail';
import type { User } from '../types';

export const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { users } = useUsers();
  const navigate = useNavigate();
  const user = users.find((u: User) => u.id === id);

  if (!user) return <>User not found.</>;

  return <UserDetail user={user} onBack={() => navigate(-1)} />;
}; 