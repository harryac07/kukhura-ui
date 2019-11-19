import React from 'react'
import { P, WrapperDiv } from 'components/common/commonStyle'
import ImageTitleTextButton from 'components/common/components/ImageTitleTextButton'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  maindiv: {
    padding: '100px 0px',
    width: '100%',
    background: '#fff'
  }
}));

const Services = () => {
  const classes = useStyles();
  return (
    <div className={classes.maindiv}>
      <WrapperDiv>
        <Title text={"Our products and services"} padding="0px 0px 24px 0px" />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <ImageTitleTextButton
              bgImageUrl={"https://dummyimage.com/400x250/cccccc/000.jpg"}
              title={"ULUM MOLESTIE LACUS AENEAN NOMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE SUSCIPIT"}
              text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat"}
              button={true}
              buttonText={"read more"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ImageTitleTextButton
              bgImageUrl={"https://dummyimage.com/400x250/cccccc/000.jpg"}
              title={"ULUM MOLESTIE LACUS AENEAN NOMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE SUSCIPIT"}
              text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat"}
              button={true}
              buttonText={"read more"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ImageTitleTextButton
              bgImageUrl={"https://dummyimage.com/400x250/cccccc/000.jpg"}
              title={"ULUM MOLESTIE LACUS AENEAN NOMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE SUSCIPIT"}
              text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat"}
              button={true}
              buttonText={"read more"}
            />
          </Grid>
        </Grid>
      </WrapperDiv>
    </div>
  )
}
export default Services