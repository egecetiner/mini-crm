import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;

export const Name = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Email = styled.div`
  font-size: 1rem;
  color: #555;
`;

export const Role = styled.div`
  font-size: 1rem;
  color: #1976d2;
`;

export const Active = styled.div<{ $active: boolean }>`
  font-size: 0.95rem;
  color: ${({ $active }) => ($active ? '#388e3c' : '#d32f2f')};
`;

export const Created = styled.div`
  font-size: 0.9rem;
  color: #888;
`;

export const DetailsButton = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 0.95rem;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s;
  &:hover {
    background: #1565c0;
  }
`; 