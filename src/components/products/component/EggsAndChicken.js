import React from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import Title from 'components/common/components/Title'
import ImageTitleText from 'components/common/components/ImageTitleTextButton'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  maindiv: {
    padding: '100px 0px',
    width: '100%',
    background: '#f0f0f0',
  }
}));

const EggsAndChiken = (props) => {
  const classes = useStyles();
  return (
    <ComponentWrapper backgroundColor="#f0f0f0">
      <Title text={"Organic Eggs"} padding="0px 0px 24px 0px" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <ImageTitleText
            bgImageUrl={"https://dummyimage.com/400x300/cccccc/000.jpg"}
            title={"CUM SOCIIS NATOQUE PENATIB"}
            text={"Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscip"}
            textBgColor={"inherit"}
            button={false}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ImageTitleText
            bgImageUrl={"https://dummyimage.com/400x300/cccccc/000.jpg"}
            title={"CUM SOCIIS NATOQUE PENATIB"}
            text={"Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscip"}
            textBgColor={"inherit"}
            button={false}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ImageTitleText
            bgImageUrl={"https://dummyimage.com/400x300/cccccc/000.jpg"}
            title={"CUM SOCIIS NATOQUE PENATIB"}
            text={"Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscip"}
            textBgColor={"inherit"}
            button={false}
          />
        </Grid>
      </Grid>
    </ComponentWrapper>
  )
}
export default EggsAndChiken