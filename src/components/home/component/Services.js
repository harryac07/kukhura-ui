import React from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import ImageTitleTextButton from 'components/common/components/ImageTitleTextButton'
import Title from 'components/common/components/Title'
import { Grid } from '@material-ui/core';

const Services = () => {
  return (
    <ComponentWrapper>
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
    </ComponentWrapper>
  )
}
export default Services