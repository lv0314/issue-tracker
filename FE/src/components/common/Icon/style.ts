import styled from 'styled-components';

import { theme } from '@/styles/theme';

export type IconStyledProps = {
  iconSize?: keyof typeof theme.iconSize;
  styles?: string;
};

// TODO 색상을 어떻게 할것인가
export const Icon = styled.figure.attrs<IconStyledProps>(
  ({ iconSize = 'base', styles }) => ({
    style: {
      width: theme.iconSize[iconSize],
      height: theme.iconSize[iconSize],
      styles,
    },
  }),
)<IconStyledProps>`
  cursor: pointer;
`;
