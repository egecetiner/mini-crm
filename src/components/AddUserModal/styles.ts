import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 32px 28px;
  min-width: 340px;
  max-width: 95vw;
  box-shadow: 0 4px 24px rgba(0,0,0,0.13);
  @media (max-width: 600px) {
    min-width: unset;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    padding: 18px 6px;
    max-width: 100vw;
  }
`;

export const Title = styled.h2`
  margin: 0 0 16px 0;
  font-size: 1.5rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Checkbox = styled.input`
  margin-right: 8px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 18px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Button = styled.button`
  padding: 10px 22px;
  border-radius: 6px;
  border: none;
  background: #007bff;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
  &:hover {
    background: #0056b3;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 12px 0;
    font-size: 1.08rem;
  }
`;

export const ErrorText = styled.div`
  color: #d32f2f;
  font-size: 0.95rem;
  margin-bottom: 8px;
`; 