import React from 'react'
import { WrapperDiv } from 'components/common/commonStyle'
import TitleTextArrow from 'components/common/components/TitleTextArrow'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  maindiv: {
    padding: '100px 0px',
    width: '100%',
    background: '#fff'
  }
}));

const Product = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.maindiv}>
      <WrapperDiv>
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
      </WrapperDiv>
    </div>
  )
}
export default Product