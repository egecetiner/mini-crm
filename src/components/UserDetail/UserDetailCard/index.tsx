import React from 'react';
import { Card } from './styles';
import type { UserDetailCardProps } from './props';

export const UserDetailCard: React.FC<UserDetailCardProps> = ({ user }) => (
  <Card>
    <h2>{user.name}</h2>
    <div><b>Email:</b> {user.email}</div>
    <div><b>Role:</b> {user.role}</div>
    <div><b>Active:</b> {user.active ? 'Yes' : 'No'}</div>
    <div><b>Creation Date:</b> {new Date(user.createdAt).toLocaleString()}</div>
  </Card>
); 