import type { User } from '../../../types';

export type UserCardProps = {
  user: User;
  onDetails: (id: string) => void;
}; 