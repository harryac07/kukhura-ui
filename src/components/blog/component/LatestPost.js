import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import Title from 'components/common/components/Title'
import ImageTitleTextButton from 'components/common/components/ImageTitleTextButton'
import { makeStyles } from '@material-ui/core/styles';
import { StyledLink } from 'components/common/components/Link'
import styled from 'styled-components';
import { Link } from '@material-ui/core';
import { OrangeButton } from 'components/common/components/Button'
import { Typography } from '@material-ui/core';
import { truncate } from 'lodash';

const useStyles = makeStyles(theme => ({
  fadedTextColor: {
    color: '#7c7c7c'
  },
  blackTextColor: {
    color: '#000'
  },
  recentPost: {
    position: 'relative',
    width: '100%'
  },
  recentPostWrapper: {
    position: 'absolute',
    top: '28%',
    left: '20%',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      top: '20%',
      left: '10%',
      width: '80%',
    },
  },
  dateSpan: {
    fontWeight: 'normal'
  },


  ServicesH3: {
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: 'trasnparent',
    position: 'relative',
    // borderRadius: 10,
    padding: '30px',
    height: '50%',
    background: 'rgba(255,255,255,0.6)',
    color: '#000',
    textAlign: 'center'
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

const LatestPost = ({ recentPost = {}, history }) => {
  const classes = useStyles();
  return (

    <ComponentWrapper>
      <Title text={"Newsroom"} padding="0px 0px 24px 0px" />
      <div
        className={classes.recentPost}
        style={{
          backgroundImage: 'url("https://dummyimage.com/1200x500/cccccc/000.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          minHeight: '500px',
        }}
      >
        {/* Post wrapper */}
        <div className={classes.recentPostWrapper}>
          <div className={classes.item}>
            {
              /* title */
              <Typography className={classes.ServicesH3} variant="p">
                <StyledLink to={`/blog/${recentPost.id}`}>{recentPost.title}</StyledLink>
                <br />
                <span className={classes.dateSpan}>
                  {moment(recentPost.created_on).format('LL')}
                </span>
              </Typography>
            }
            {/* text */}
            <p className={classes.serviceTextColor}>
              {
                truncate(recentPost.post_content || "", {
                  'length': 350,
                })
              }
            </p>
            <OrangeButton
              className={classes.readMoreButton}
              onClick={() => history.push('/blog/' + recentPost.id)}
            >
              READ MORE
            </OrangeButton>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  )
}
LatestPost.propTypes = {
  recentPost: PropTypes.object
}
export default LatestPost