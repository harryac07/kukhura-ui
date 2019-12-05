import React from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import TitleTextArrow from 'components/common/components/TitleTextArrow'
import { Grid } from '@material-ui/core';

const Product = (props) => {
  return (
    <ComponentWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TitleTextArrow
            title={"Best hens"}
            text={"Lorem ipsum dolor sit amet, consetue ipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris."}
            arrow={true}
            bgColor={"blue"}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TitleTextArrow
            title={"Organic eggs"}
            text={"Lorem ipsum dolor sit amet, consetue ipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris."}
            arrow={true}
            bgColor={"green"}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TitleTextArrow
            title={"Our farm"}
            text={"Lorem ipsum dolor sit amet, consetue ipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris."}
            arrow={true}
            bgColor={"orange"}
          />
        </Grid>
      </Grid>
    </ComponentWrapper>
  )
}
export default Product