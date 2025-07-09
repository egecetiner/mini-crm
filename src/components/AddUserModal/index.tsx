import React, { useState } from 'react';
import { ModalOverlay, ModalContent, Title, Field, Label, Input, Select, Checkbox, Actions, Button, ErrorText } from './styles';
import type { UserRole } from '../../types';
import type { AddUserModalProps } from './props';

export const AddUserModal: React.FC<AddUserModalProps> = ({ open, onClose, onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('User');
  const [active, setActive] = useState(true);
  const [error, setError] = useState('');

  const validate = () => {
    if (!name.trim()) return 'Name is required.';
    if (!email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(email)) return 'Invalid email format.';
    if (!password) return 'Password is required.';
    if (password.length < 6) return 'Password must be at least 6 characters.';
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    onAddUser({ name, email, password, role, active });
    setName('');
    setEmail('');
    setPassword('');
    setRole('User');
    setActive(true);
    setError('');
    onClose();
  };

  if (!open) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Add New User</Title>
        <form onSubmit={handleSubmit}>
          <Field>
            <Label>Name</Label>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Field>

          <Field>
            <Label>Email</Label>
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Field>

          <Field>
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Field>

          <Field>
            <Label>Role</Label>
            <Select
              value={role}
              onChange={e => setRole(e.target.value as UserRole)}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
            </Select>
          </Field>

          <Field>
            <Label>
              <Checkbox
                type="checkbox"
                checked={active}
                onChange={e => setActive(e.target.checked)}
              />
              Active
            </Label>
          </Field>

          {error && <ErrorText>{error}</ErrorText>}

          <Actions>
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Add
            </Button>
          </Actions>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
}; 