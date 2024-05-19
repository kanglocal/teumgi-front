import { createThemeContract, createTheme, createGlobalTheme } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    red: 'color-red',
    yellow: 'color-yellow',
    green: 'color-green',
    blue: 'color-blue',
    purple: 'color-purple',
    black: 'color-black',
    white: 'color-white',
    gray1: 'color-gray1',
    gray2: 'color-gray2',
    gray3: 'color-gray3',
    gray4: 'color-gray4',
    gray5: 'color-gray5',
    gray6: 'color-gray6',
    gray7: 'color-gray7',
  },
  breakpoints: {
    pc: 'breakpoint-pc',
    tablet: 'breakpoint-tablet',
    mobile: 'breakpoint-mobile',
  },
});

createGlobalTheme(':root', vars, {
  color: {
    red: '#FF6E6E',
    yellow: '#FFFDD0',
    green: '#B7E4C7',
    blue: '#AED9E0',
    purple: '#D8BFD8',
    black: '#181818',
    white: '#FFFFFF',
    gray1: '#F6F6F6',
    gray2: '#EEEEEE',
    gray3: '#CCCCCC',
    gray4: '#999999',
    gray5: '#555555',
    gray6: '#4A4A4A',
    gray7: '#2B2B2B',
  },
  breakpoints: {
    pc: '1024px',
    tablet: '768px',
    mobile: '240px',
  },
});

export const themeColor = createThemeContract({
  color: {
    textColor: vars.color.black,
    backgroundColor: vars.color.white,
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    textColor: vars.color.black,
    backgroundColor: vars.color.white,
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    textColor: vars.color.white,
    backgroundColor: vars.color.gray6,
  },
});
