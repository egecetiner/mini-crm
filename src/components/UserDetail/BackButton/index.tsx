import React from 'react';
import { Button } from './styles';
import type { BackButtonProps } from './props';

export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
  <Button onClick={onClick}>← Back</Button>
); 