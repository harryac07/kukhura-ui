import React from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import { StyledLink } from 'components/common/components/Link'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  textBold: {
    fontWeight: 'bold'
  },
  item: {
    position: 'relative',
    // borderRadius: 10,
    padding: '30px 0px 0px 0px',
    minHeight: 150,
    background: '#fff',
    color: '#000'
  },
  serviceTextColor: {
    color: '#7c7c7c'
  }
}));


const NewsAndOffer = (props) => {
  const classes = useStyles();
  return (
    <ComponentWrapper>
      <Title text={"News and offers"} />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <div className={classes.item}>
            <StyledLink to={"#"}>
              <Typography className={classes.textBold} variant="p">
                ULUM MOLESTIE LACUS AENEAN NOMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE SUSCIPIT
              </Typography>
            </StyledLink>
            <p>26/07/2019</p>
            <p className={classes.serviceTextColor}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat
              </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.item}>
            <StyledLink to={"#"}>
              <Typography className={classes.textBold} variant="p">
                ULUM MOLESTIE LACUS AENEAN NOMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE SUSCIPIT
              </Typography>
            </StyledLink>
            <p>26/07/2019</p>
            <p className={classes.serviceTextColor}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat
              </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.item}>
            <StyledLink to={"#"}>
              <Typography className={classes.textBold} variant="p">
                ULUM MOLESTIE LACUS AENEAN NOMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE SUSCIPIT
              </Typography>
            </StyledLink>
            <p>26/07/2019</p>
            <p className={classes.serviceTextColor}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat
              </p>
          </div>
        </Grid>
      </Grid>
    </ComponentWrapper>
  )
}
export default NewsAndOffer