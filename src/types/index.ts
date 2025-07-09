export type UserRole = 'Admin' | 'Manager' | 'User';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  active: boolean;
  createdAt: string;
  latitude: number;
  longitude: number;
};

export type UsersContextType = {
  users: User[];
  addUser: (user: { name: string; email: string; password: string; role: UserRole; active: boolean }) => void;
};

export type UserTableProps = {
  users: User[];
  onDetails: (id: string) => void;
};

export type UserCardProps = {
  user: User;
  onDetails: (id: string) => void;
};

export type UserCardGridProps = {
  users: User[];
  onDetails: (id: string) => void;
};

export type PaginationProps = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}; 