import styled from 'styled-components';

export const NavigationTab = styled.nav`
  height: 40px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 11px;
  overflow: hidden;
  & :last-child {
    border-right: none;
  }
`;
