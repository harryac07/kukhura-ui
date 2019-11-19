import React from 'react'
import PropTypes from 'prop-types';
import TitleText from 'components/common/components/ImageTitleTextButton'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  customIcon: {
    backgroundColor: props => props.iconBgColor,
    color: props => props.iconTextColor,
    height: '80px',
    width: '80px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: '30px auto',
    [theme.breakpoints.down('md')]: {
      height: '40px',
      width: '40px',
    },
  }
}));

const IconTitleText = ({
  iconDom,
  iconText,
  iconBgColor = "gray",
  iconTextColor = "#fff",
  titleText,
  text,
  textDom,
  isButton = false,
  buttonText = "",
  textBgColor
}) => {
  const classes = useStyles({ iconTextColor, iconBgColor });
  return (
    <Grid container spacing={3}>
      {/* icon grid */}
      <Grid item xs={2} sm={2}>
        <div className={classes.customIcon}>
          <span>
            {iconText}
          </span>
        </div>
      </Grid>
      {/* text grid */}
      <Grid item xs={8} sm={10}>
        <TitleText
          title={titleText}
          text={text}
          textDom={textDom}
          button={isButton}
          buttonText={buttonText}
          textBgColor={textBgColor}
        />
      </Grid>
    </Grid>
  )
}

IconTitleText.propTypes = {
  iconDom: PropTypes.node,
  iconText: PropTypes.string,
  iconTextColor: PropTypes.string,
  iconBgColor: PropTypes.string,
  titleText: PropTypes.string,
  text: PropTypes.string,
  textDom: PropTypes.node,
  isButton: PropTypes.bool,
  buttonText: PropTypes.string,
  textBgColor: PropTypes.string
}
export default IconTitleText