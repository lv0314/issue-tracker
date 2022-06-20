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
      primary: string;
      secondary: string;
      error: string;
      success: string;
      offwhite: string;
      titleArchieve: string;
      body: string;
      label: string;
      placeholder: string;
      line: string;
      inputBackground: string;
      background: string;
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
