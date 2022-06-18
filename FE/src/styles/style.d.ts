import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      smaller: string;
      small: string;
      base: string;
      large: string;
      larger: string;
      header: string;
      login: string;
    };

    fontWeight: {
      base: number;
      bold: number;
    };

    color: {
      black: string;
      white: string;
      offwhite: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      blue: string;
      lightblue: string;
      lightviolet: string;
      red: string;
    };

    iconSize: {
      base: string;
    };

    badgeSize: {
      base: string;
      small: string;
    };

    buttonWidth: {
      large: string;
      medium: string;
      small: string;
    };

    buttonHeight: {
      large: string;
      medium: string;
      small: string;
    };

    logoWidth: {
      medium: string;
      large: string;
    };

    logoHeight: {
      medium: string;
      large: string;
    };
  }
}
