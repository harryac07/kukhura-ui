import React from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import { StyledLink } from 'components/common/components/Link'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import { truncate } from 'lodash';

const useStyles = makeStyles(theme => ({
  textBold: {
    fontWeight: 'bold'
  },
  item: {
    position: 'relative',
    padding: '30px 0px 0px 0px',
    minHeight: 150,
    background: '#fff',
    color: '#000'
  },
  serviceTextColor: {
    color: '#7c7c7c'
  }
}));


const NewsAndOffer = ({ recentPosts }) => {
  const classes = useStyles();
  return (
    <ComponentWrapper>
      <Title text={"News and offers"} />
      <Grid container spacing={3}>
        {
          /* Loop through recent posts */
          recentPosts.map(each => {
            return (
              <Grid item xs={12} sm={4} key={each.id}>
                <div className={classes.item}>
                  <StyledLink to={'/blog/' + each.id}>
                    <Typography className={classes.textBold} variant="p">
                      {each.title.toUpperCase()}
                    </Typography>
                  </StyledLink>
                  <p>{moment(each.created_on).format('LL')}</p>
                  <p className={classes.serviceTextColor}>
                    {
                      truncate(each.post_content||"", {
                        'length': 150,
                      })
                    }
                  </p>
                </div>
              </Grid>
            );
          })
        }
      </Grid>
    </ComponentWrapper>
  )
}
export default NewsAndOffer