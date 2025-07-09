import React from 'react';
import { Grid } from './styles';
import { UserCard } from '../UserCard';
import type { UserCardGridProps } from './props';

export const UserCardGrid: React.FC<UserCardGridProps> = ({ users, onDetails }) => (
  <Grid>
    {users.map(user => (
      <UserCard key={user.id} user={user} onDetails={onDetails} />
    ))}
  </Grid>
); 