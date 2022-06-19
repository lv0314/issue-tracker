import styled from 'styled-components';

export const LayOut = styled.nav`
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 11px;
  overflow: hidden;
`;

export const NavigationItem = styled.a`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 6px 32.5px;
`;
