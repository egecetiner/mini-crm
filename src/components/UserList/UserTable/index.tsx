import React from 'react';
import { Table, Row, Cell, DetailsButton } from './styles';
import type { UserTableProps } from './props';

export const UserTable: React.FC<UserTableProps> = ({ users, onDetails }) => (
  <Table>
    <thead>
      <Row>
        <Cell as="th">Name</Cell>
        <Cell as="th">Email</Cell>
        <Cell as="th">Role</Cell>
        <Cell as="th">Active</Cell>
        <Cell as="th">Creation Date</Cell>
        <Cell as="th"></Cell>
      </Row>
    </thead>
    <tbody>
      {users.map(user => (
        <Row key={user.id}>
          <Cell>{user.name}</Cell>
          <Cell>{user.email}</Cell>
          <Cell>{user.role}</Cell>
          <Cell>{user.active ? 'Yes' : 'No'}</Cell>
          <Cell>{new Date(user.createdAt).toLocaleString()}</Cell>
          <Cell>
            <DetailsButton onClick={() => onDetails(user.id)}>Details</DetailsButton>
          </Cell>
        </Row>
      ))}
    </tbody>
  </Table>
); 