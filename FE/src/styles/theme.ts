import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  fontSize: {
    smaller: '12px',
    small: '14px',
    base: '16px',
    large: '18px',
    larger: '20px',
    header: '32px',
    login: '56px',
  },

  fontWeight: {
    base: 400,
    bold: 700,
  },

  color: {
    black: '#14142B',
    white: '#FEFEFE',
    offwhite: '#F5F5F5',
    gray1: '#333333',
    gray2: '#4F4F4F',
    gray3: '#828282',
    gray4: '#BDBDBD',
    gray5: '#E0E0E0',
    gray6: '#F5F5F7',
    blue: '#007AFF',
    lightblue: '#C7EBFF',
    lightviolet: '#CCD4FF',
    red: '#FF3B30',
  },

  iconSize: {
    base: '16px',
  },

  badgeSize: {
    base: '44px',
    small: '20px',
  },

  buttonWidth: {
    large: '340px',
    medium: '240px',
    small: '120px',
  },

  buttonHeight: {
    large: '64px',
    medium: '56px',
    small: '40px',
  },
};
