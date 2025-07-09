import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 600px) {
    padding: 14px 8px;
    font-size: 15px;
  }
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
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  background: #007bff;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0056b3;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
  }
`; 