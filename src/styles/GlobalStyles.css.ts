import { globalStyle } from '@vanilla-extract/css';
import { themeColor } from '@/styles/theme.css';

globalStyle('html', {
  height: '100%',
  fontSize: '62.5%',
  color: themeColor.color.textColor,
  backgroundColor: themeColor.color.backgroundColor,
});

globalStyle('body', {
  height: '100%',
  margin: 0,
  boxSizing: 'border-box',
  color: themeColor.color.textColor,
  backgroundColor: themeColor.color.backgroundColor,
});

// themeProvider
globalStyle('body > div', {
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  color: themeColor.color.textColor,
  backgroundColor: themeColor.color.backgroundColor,
});

globalStyle('body > div > #rootContainer', {
  width: '100%',
  maxWidth: '1024px',
  minWidth: '240px',
});

globalStyle('body *', {
  boxSizing: 'border-box',
  color: themeColor.color.textColor,
  backgroundColor: themeColor.color.backgroundColor,
});
