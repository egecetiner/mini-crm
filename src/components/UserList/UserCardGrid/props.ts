import type { User } from '../../../types';

export type UserCardGridProps = {
  users: User[];
  onDetails: (id: string) => void;
}; 