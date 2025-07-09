import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
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