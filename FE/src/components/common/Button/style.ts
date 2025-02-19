import styled from 'styled-components';
import { theme } from '@/styles/theme';
// TODO: import theme 없애기

export type StyledButtonProps = {
  size: keyof typeof theme.buttonWidth;
  color: keyof typeof theme.color;
  fontSize: keyof typeof theme.fontSize;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export const Button = styled.button.attrs<StyledButtonProps>(
  ({ size, color, fontSize }) => ({
    style: {
      width: theme.buttonWidth[size],
      height: theme.buttonHeight[size],
      fontSize: theme.fontSize[fontSize],
      backgroundColor: theme.color[color],
    },
  }),
)<StyledButtonProps>`
  cursor: pointer;
  color: ${theme.color.offwhite};
  font-weight: ${theme.fontWeight.bold};
  border-radius: 20px;
  border: none;
`;
