import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 16px 0 0 0;
`;

export const Button = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 14px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:disabled {
    background: #bdbdbd;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background: #1565c0;
  }
`; 