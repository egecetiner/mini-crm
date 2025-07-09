import React from 'react';
import { Card, Name, Email, Role, Active, Created, DetailsButton } from './styles';
import type { UserCardProps } from './props';

export const UserCard: React.FC<UserCardProps> = ({ user, onDetails }) => (
  <Card>
    <Name>{user.name}</Name>
    <Email>{user.email}</Email>
    <Role>{user.role}</Role>
    <Active $active={user.active}>{user.active ? 'Active' : 'Inactive'}</Active>
    <Created>{new Date(user.createdAt).toLocaleString()}</Created>
    <DetailsButton onClick={() => onDetails(user.id)}>Details</DetailsButton>
  </Card>
); 