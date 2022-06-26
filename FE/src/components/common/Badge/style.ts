import styled from 'styled-components';
import { theme } from '@/styles/theme';

export type BadgeStyledProps = {
  badgeSize?: keyof typeof theme.badgeSize;
  styles?: string;
};

export const Badge = styled.figure.attrs<BadgeStyledProps>(
  ({ badgeSize = theme.badgeSize.base, styles = theme.badgeSize.base }) => ({
    style: {
      width: badgeSize,
      height: badgeSize,
      styles,
    },
  }),
)<BadgeStyledProps>`
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 0px 0px 10px ${theme.color.line} inset;
  border-radius: 50%;
`;
