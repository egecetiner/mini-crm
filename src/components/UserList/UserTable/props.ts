import type { User } from '../../../types';

export type UserTableProps = {
  users: User[];
  onDetails: (id: string) => void;
}; 