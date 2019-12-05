import React from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import PropTypes from 'prop-types';
import ImageTitleTextButton from 'components/common/components/ImageTitleTextButton'
import { makeStyles } from '@material-ui/core/styles';
import { OrangeButton } from 'components/common/components/Button'
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  fadedTextColor: {
    color: '#7c7c7c'
  },
  blackTextColor: {
    color: '#000'
  },
  centerDiv: {
    width: '100%',
    display: 'block',
    textAlign: 'center'
  },
  readMoreButton: {
    width: '40%',
    borderRadius: '15px',
    margin: '40px 0px 0px 0px'
  }
}));

const BlogList = ({ blogList, loadMoreBlogPosts }) => {
  const classes = useStyles();
  return (
    <ComponentWrapper>
      <Grid container spacing={3}>
        {
          /* Render Blog Post Dynamically */
          blogList.map(each => {
            return (
              <Grid item xs={12} sm={3} key={each.id}>
                <ImageTitleTextButton
                  bgImageUrl={each.post_image_url}
                  titleDom={<Link href="#">{each.title}</Link>}
                  textDom={
                    <div>
                      <p className={classes.blackTextColor}>
                        {moment(each.created_on).format('LL')}
                      </p>
                      <p className={classes.fadedTextColor}>
                        {each.post_content}
                      </p>
                    </div>
                  }
                  button={false}
                  buttonText={"read more"}
                  textBgColor={"#f0f0f0"}
                />
              </Grid>
            )
          })
        }
        <Grid item xs={12} sm={12}>
          <div className={classes.centerDiv}>
            <OrangeButton
              onClick={loadMoreBlogPosts}
              padding="12px"
              className={classes.readMoreButton}
            >
              Show More
              </OrangeButton>
          </div>
        </Grid>
      </Grid>
    </ComponentWrapper>
  )
}
BlogList.propTypes = {
  blogList: PropTypes.array
}
export default BlogList
