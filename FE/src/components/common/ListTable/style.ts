import styled from 'styled-components';

export const ListTable = styled.section`
  width: 100%;
  min-height: 120px;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.offwhite};
  overflow: hidden;
`;

export const ListTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.color.background};
`;

export const ListTableItems = styled.ul`
  display: flex;

  flex-direction: column;
`;
