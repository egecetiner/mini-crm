import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f9fa;
  padding: 32px 0;
  @media (max-width: 600px) {
    padding: 12px 0;
    font-size: 15px;
  }
`; 