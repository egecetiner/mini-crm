import React, { createContext, useEffect, useState } from 'react';
import type { User, UsersContextType, UserRole } from '../types/index';
import { generateFakeUsers } from '../utils/generateFakeUsers';
import { LOCAL_STORAGE_KEY } from '../constants';

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export { UsersContext };

export const UsersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      try {
        setUsers(JSON.parse(data));
        return;
      } catch (error) {
        console.error('Failed to parse users from localStorage:', error);
      }
    }
    const fake = generateFakeUsers();
    setUsers(fake);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(fake));
  }, []);

  const addUser: (user: { name: string; email: string; password: string; role: UserRole; active: boolean }) => void = (user) => {
    const newUser: User = {
      ...user,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      latitude: Math.random() * 180 - 90,
      longitude: Math.random() * 360 - 180,
    };
    setUsers(prev => {
      const updated = [newUser, ...prev];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
}; 