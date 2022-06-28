import styled from 'styled-components';

export const ListModal = styled.div`
  min-width: 240px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.offwhite};
  position: absolute;
  top: 70%;
  right: 0;
  margin-top: 8px;
`;

export const ListTitle = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

export const ListText = styled.div`
  min-width: 184px;
`;
