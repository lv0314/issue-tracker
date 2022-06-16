import styled from 'styled-components';

import { theme } from '@/styles/theme';

export type TextStyledProps = {
  color?: keyof typeof theme.color;
  fontSize?: keyof typeof theme.fontSize;
  fontWeight?: keyof typeof theme.fontWeight;
  styles?: string;
};

export const Text = styled.span.attrs<TextStyledProps>(
  ({ color = 'black', fontSize = 'base', fontWeight = 'base', styles }) => ({
    style: {
      color: theme.color[color],
      fontSize: theme.fontSize[fontSize],
      fontWeight: theme.fontWeight[fontWeight],
      styles,
    },
  }),
)<TextStyledProps>`
  display: flex;
  align-items: center;
`;
