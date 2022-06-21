import styled from 'styled-components';

export const AddIssueSubmit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
`;

// TODO: 동작 정의 및 네이밍 수정
export const CancelButton = styled.div`
  display: flex;
  gap: 4px;
  color: ${({ theme }) => theme.color.label};
  font-weight: ${({ theme }) => theme.fontWeight.bold}; ;
`;
