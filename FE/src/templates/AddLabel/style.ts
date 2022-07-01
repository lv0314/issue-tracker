import styled from 'styled-components';

export const AddLabel = styled.section`
  max-width: 1680px;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.offwhite};
  padding: 32px;
  gap: 24px;
`;

export const ContentsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const LabelInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`;

export const LabelDisplay = styled.div`
  width: 288px;
  height: 217px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelDescription = styled.div`
  display: flex;
  width: 904px;
  flex-direction: column;
  gap: 16px;
`;

export const InfoInput = styled.input`
  width: 100%;
  padding: 14px 24px;
  background-color: ${({ theme }) => theme.color.inputBackground};
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 16px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.titleArchieve};

  ::placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }
  :focus {
    outline: none;
  }
`;

export const LabelColors = styled.div`
  display: flex;
  gap: 16px;
`;

export const ColorInputWrapper = styled.div`
  padding: 14px 24px;
  background-color: ${({ theme }) => theme.color.inputBackground};
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 16px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.titleArchieve};
  display: flex;
  gap: 24px;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Cursor = styled.div`
  cursor: pointer;
`;
