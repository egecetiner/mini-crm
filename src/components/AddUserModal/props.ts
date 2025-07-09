import type { UserRole } from '../../types';

export type AddUserModalProps = {
  open: boolean;
  onClose: () => void;
  onAddUser: (user: { name: string; email: string; password: string; role: UserRole; active: boolean }) => void;
}; 