import styled from 'styled-components';

export const AddIssuePage = styled.div`
  width: 100vw;
  padding: 25px 120px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TypeSection = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 32px 0;
  border-top: 1px solid ${({ theme }) => theme.color.line};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;
