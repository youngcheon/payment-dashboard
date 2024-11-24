import { DefaultTheme } from 'styled-components';

const colors = {
  primary: '#363062',
  secondary: '#5BDAA4',
  black: '#000000',
  lightGray: '#E2E2E2',
  gray: '#BDBDBD',
  darkGray: '#6B6B6B',
  white: '#FFFFFF',
  background: '#f5f5f5',
};

const fontSize = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '24px',
};

const mobile = {
  maxWidth: '430px',
  maxHeight: '932px',
};

export const theme: DefaultTheme = {
  colors,
  fontSize,
  mobile,
};
