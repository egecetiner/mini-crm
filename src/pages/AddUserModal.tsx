import React from 'react';
import { AddUserModal } from '../components/AddUserModal';
import type { UserRole } from '../types';

interface AddUserModalPageProps {
  open: boolean;
  onClose: () => void;
  onAddUser: (user: { name: string; email: string; password: string; role: UserRole; active: boolean }) => void;
}

export const AddUserModalPage: React.FC<AddUserModalPageProps> = (props) => {
  return <AddUserModal {...props} />;
}; 