import styled from 'styled-components';

export const OptionSideBar = styled.div`
  width: 310px;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 16px;
  height: fit-content;
  overflow: hidden;

  & :last-child {
    border-bottom: none;
  }
`;

export const OptionDetail = styled.details`
  position: relative;
  background-color: ${({ theme }) => theme.color.offwhite};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  cursor: pointer;

  summary {
    display: flex;
    justify-content: space-between;
    width: inherit;
    height: inherit;
    padding: 34px 32px;
    box-sizing: border-box;
  }
`;

export const OptionMenu = styled.div`
  top: 70%;
  right: 10%;
  position: absolute;
  z-index: 2;
  width: 240px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.line};
  overflow: hidden;
`;

export const OptionHeader = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  background-color: ${({ theme }) => theme.color.background};
  cursor: default;
`;

export const OptionList = styled.ul`
  background-color: ${({ theme }) => theme.color.offwhite};

  & :last-child {
    border-bottom: none;
  }
`;

export const OptionItem = styled.li`
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
