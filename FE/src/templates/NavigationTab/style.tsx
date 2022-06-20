import styled from 'styled-components';

export const LayOut = styled.nav`
  height: 40px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 11px;
  overflow: hidden;
  & :last-child {
    border-right: none;
  }
`;

export const NavigationItem = styled.a`
  display: flex;
  justify-content: center;
  width: 200px;
  gap: 10px;
  padding: 6px 32.5px;
  border-right: 1px solid ${({ theme }) => theme.color.line};
`;
