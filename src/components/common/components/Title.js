import React from 'react'
import PropTypes from 'prop-types'
import { P } from 'components/common/commonStyle'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  titleText: {
    marginTop: 0,
  },
}));

/**
 * Title
 * @param {String}padding - Not required if called inside MUI Grid
 * @param {String}text - Title text
 * @param {String}fontSize - Default fontsize is 36px. Override default
 */
const Title = ({ padding, text, fontSize = "36px" }) => {
  const classes = useStyles();
  return (
    <P
      padding={padding ? padding : "0px"}
      display="block"
      fontSize={fontSize}
      className={classes.titleText}
    >
      {text}
    </P>
  );
}
Title.propTypes = {
  text: PropTypes.string,
  padding: PropTypes.string
};
export default Title;