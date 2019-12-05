import React from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import TitleTextButtonfrom from 'components/common/components/ImageTitleTextButton'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 14,
    color: '#000'
  }
}));

const OurProducts = (props) => {
  const classes = useStyles();
  return (
    <ComponentWrapper color="#7c7c7c">
      <Title text={"Our products"} padding="0px 0px 24px 0px" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.subtitle} fontWeight="bold" variant="h6">
            SUPER-FRESH EGGS AND CHICKEN!
            </Typography>
          <Typography variant="p">
            Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              <br />
            <br />
            Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra.
            </Typography>
        </Grid>
      </Grid>
    </ComponentWrapper>
  )
}
export default OurProducts