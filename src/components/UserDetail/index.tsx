import React from 'react';
import { Container } from './styles';
import { UserDetailCard } from './UserDetailCard';
import { UserLocationMap } from './UserLocationMap';
import { BackButton } from './BackButton';
import type { UserDetailProps } from './props';

export const UserDetail: React.FC<UserDetailProps> = ({ user, onBack }) => (
  <Container>
    <BackButton onClick={onBack} />
    <UserDetailCard user={user} />
    <UserLocationMap latitude={user.latitude} longitude={user.longitude} name={user.name} />
  </Container>
); 