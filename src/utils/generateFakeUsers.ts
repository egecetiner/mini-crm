import type { User } from '../types';
import { faker } from '@faker-js/faker';

export function generateFakeUsers(count: number = 5000): User[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10 }),
    role: faker.helpers.arrayElement(['Admin', 'Manager', 'User']),
    active: faker.datatype.boolean(),
    createdAt: faker.date.past({ years: 2 }).toISOString(),
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
  }));
} 