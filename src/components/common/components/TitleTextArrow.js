import React from 'react'
import PropTypes from 'prop-types'
import { P } from 'components/common/commonStyle'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  item: {
    background: '#00a1f1',
    position: 'relative',
    borderRadius: 10,
    padding: '30px 35px 30px 35px',
    color: '#fff',
    minHeight: 150,
    [theme.breakpoints.down('md')]: {
      padding: '30px 10px',
      height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '20px 10px',
      height: 'auto',
      minHeight: 200,
    },
  },
  arrowIcon: {
    fontWeight: 67,
  },
  blueBackground: {
    background: '#00a1f1',
  },
  greenBackground: {
    background: '#7cbb00', // f65314 // #7cbb00
  },
  orangeBackground: {
    background: '#f65314'
  }
}));

const TitleTextArrow = ({ title, text, arrow, bgColor }) => {
  const classes = useStyles();
  const bgClass = `${bgColor ? bgColor : 'orange'}Background`
  return (
    <div className={`${classes.item + ' ' + classes[bgClass]}`}>
      <Typography variant="h4">
        {title}
      </Typography>
      <p>
        {text}
      </p>
      {
        arrow
          ? <P right><ArrowForward fontSize={"large"} ArrowForward /></P>
          : null
      }
    </div>
  );
}
TitleTextArrow.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  arrow: PropTypes.bool,
  bgColor: PropTypes.string
};
export default TitleTextArrow;