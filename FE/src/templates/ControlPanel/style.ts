import styled, { DefaultTheme } from 'styled-components';
// TODO: 스타일 값 매직넘버 상수화
export const ControlPanel = styled.section`
  width: 100%;
`;

type FilterBarProps = {
  theme: DefaultTheme;
};

export const FilterBar = styled.div<FilterBarProps>`
  display: flex;
  align-items: center;
  width: 600px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 11px;
`;

export const FilterDetail = styled.details`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  border-right: 1px solid ${({ theme }) => theme.color.line};
  height: inherit;
  gap: 8px;

  summary {
    box-sizing: border-box; // INFO: 패딩 안 넘어가게
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    height: 100%;
    padding: 6px 24px;
  }
`;

export const FilterForm = styled.form`
  width: 80%;
`;
