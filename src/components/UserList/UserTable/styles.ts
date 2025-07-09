import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  max-width: 900px;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  margin-bottom: 24px;
`;

export const Row = styled.tr`
  &:nth-child(even) {
    background: #f5f5f5;
  }
`;

export const Cell = styled.td`
  padding: 12px 16px;
  text-align: left;
  font-size: 1rem;
`;

export const DetailsButton = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #1565c0;
  }
`; 