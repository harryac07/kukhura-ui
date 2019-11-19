import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { OrangeButton } from 'components/common/components/Button'

const useStyles = makeStyles(({

  ServicesH3: {
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: props => props.textBgColor,
    position: 'relative',
    // borderRadius: 10,
    padding: '30px 0px 0px 0px',
    minHeight: 150,
    background: '#fff',
    color: '#000'
  },
  backgroundImage: {
    background: props => props.bgImageUrl,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    minHeight: '250px',
  },
  serviceTextColor: {
    color: '#7c7c7c'
  },
  readMoreButton: {
    fontSize: '14px',
  }
}));

const ImageTitleTextButton = (props) => {
  const { bgImageUrl = "", title, text, textBgColor, button, buttonText, textDom } = props;
  const classes = useStyles(
    {
      bgImageUrl: `url("${bgImageUrl}")`,
      textBgColor: textBgColor ? textBgColor : ''
    }
  );
  return (
    <div>
      {
        /* image background */
        bgImageUrl
          ? <div className={classes.backgroundImage} />
          : null
      }
      {/* title */}
      <div className={classes.item}>
        <Typography className={classes.ServicesH3} variant="p">
          {title}
        </Typography>
        {/* text */}
        <p className={classes.serviceTextColor}>
          {text || textDom}
        </p>
        {
          /* button */
          button
            ? <OrangeButton className={classes.readMoreButton}>{buttonText}</OrangeButton>
            : null
        }
      </div>
    </div>
  );
}
ImageTitleTextButton.propTypes = {
  bgImageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  textBgColor: PropTypes.string,
  button: PropTypes.bool,
  buttonText: PropTypes.string
};
export default ImageTitleTextButton;