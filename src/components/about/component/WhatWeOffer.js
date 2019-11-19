import React from 'react'
import { WrapperDiv } from 'components/common/commonStyle'
import ImageTitleTextButton from 'components/common/components/ImageTitleTextButton'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  maindiv: {
    padding: '100px 0px',
    width: '100%',
    background: '#f0f0f0'
  },
}));

const WhatWeCanOffer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.maindiv}>
      <WrapperDiv>
        <Title text={"What we can offer"} padding={"0px 0px 24px 0px"} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <ImageTitleTextButton
              bgImageUrl={"https://dummyimage.com/250x250/cccccc/000.jpg"}
              title={"VESTIBULUM ANTE IPSUM PRIMIS"}
              text={"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Suspendisse sollicitudin velit sed leo."}
              button={true}
              buttonText={"read more"}
              textBgColor={"#f0f0f0"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <ImageTitleTextButton
              bgImageUrl={"https://dummyimage.com/250x250/cccccc/000.jpg"}
              title={"VESTIBULUM ANTE IPSUM PRIMIS"}
              text={"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Suspendisse sollicitudin velit sed leo."}
              button={true}
              buttonText={"read more"}
              textBgColor={"#f0f0f0"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <ImageTitleTextButton
              bgImageUrl={"https://dummyimage.com/250x250/cccccc/000.jpg"}
              title={"VESTIBULUM ANTE IPSUM PRIMIS"}
              text={"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Suspendisse sollicitudin velit sed leo."}
              button={true}
              buttonText={"read more"}
              textBgColor={"#f0f0f0"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <ImageTitleTextButton
              bgImageUrl={"https://dummyimage.com/250x250/cccccc/000.jpg"}
              title={"VESTIBULUM ANTE IPSUM PRIMIS"}
              text={"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Suspendisse sollicitudin velit sed leo."}
              button={true}
              buttonText={"read more"}
              textBgColor={"#f0f0f0"}
            />
          </Grid>
        </Grid>
      </WrapperDiv>
    </div>
  )
}
export default WhatWeCanOffer