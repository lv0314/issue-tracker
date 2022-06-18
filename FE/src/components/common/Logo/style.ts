import styled, { DefaultTheme } from 'styled-components';

export type StyledLogoProps = {
  size: 'medium' | 'large';
  theme?: DefaultTheme;
};

export const Logo = styled.a<StyledLogoProps>`
  width: ${({ size = 'medium', theme }) => theme.logoWidth[size]};
  height: ${({ size = 'medium', theme }) => theme.logoHeight[size]};
`;
