import { Button } from '@material-ui/core';
import { styled, ThemeProvider } from '@material-ui/styles';

export const OrangeButton = styled(Button)({
  background: '#f65314',
  padding: '18px 25px',
  display: 'inline',
  color: '#fff',
  fontWeight: 300,
  borderRadius: 0,
  fontSize: 18,
  '@media (max-width: 1024px)': {
    padding: '6px 12px',
    fontWeight: 200,
    borderRadius: 0,
    fontSize: 12,
  }
});