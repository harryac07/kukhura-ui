import { Button } from '@material-ui/core';
import { styled, ThemeProvider } from '@material-ui/styles';

export const OrangeButton = styled(Button)({
  backgroundColor: props => props.bgColor ? props.bgColor : '#f65314',
  padding: props => props.padding ? props.padding : '18px 25px',
  display: 'inline',
  color: '#fff',
  fontWeight: 300,
  borderRadius: 0,
  fontSize: 18,
  '&:hover': {
    backgroundColor: props => props.bgColor ? props.bgColor : '#f65314',
  },
  '@media (max-width: 1280px)': {
    padding: '6px 12px',
    fontWeight: 200,
    borderRadius: 0,
    fontSize: 12,
  },
  '@media (max-width: 960px)': {
    padding: '6px 12px',
    fontWeight: 200,
    borderRadius: 0,
    fontSize: 12,
  }
});