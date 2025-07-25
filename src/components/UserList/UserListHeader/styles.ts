import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  @media (max-width: 600px) {
    gap: 8px;
    margin-bottom: 12px;
  }
`;

export const Button = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 8px;
  transition: background 0.2s;
  &:hover {
    background: #1565c0;
  }
`;

export const Toggle = styled.button`
  background: #e0e0e0;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 8px;
  transition: background 0.2s;
  &:hover {
    background: #bdbdbd;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  @media (max-width: 600px) {
    padding: 6px 8px;
    font-size: 0.95rem;
  }
`; 