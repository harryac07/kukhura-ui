import React from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import Title from 'components/common/components/Title'
import IconTitleText from 'components/common/components/IconTitleText'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  customIcon: {
    backgroundColor: 'gray',
    height: '80px',
    width: '80px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: '30px auto'
  }
}));

const Principle = (props) => {
  const classes = useStyles();
  return (
    <ComponentWrapper backgroundColor="#f0f0f0">
      <Title text={"Our goal and principle"} padding={"0px 0px 24px 0px"} />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <IconTitleText
            titleText={"AENEAN NONUMMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE"}
            iconText={"1"}
            text={"Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra"}
            textBgColor={"inherit"}
            iconTextColor="#fff"
            iconBgColor="#7cbb00"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <IconTitleText
            titleText={"AENEAN NONUMMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE"}
            iconText={"2"}
            text={"Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra"}
            textBgColor={"inherit"}
            iconTextColor="#fff"
            iconBgColor="#7cbb00"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <IconTitleText
            titleText={"AENEAN NONUMMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE"}
            iconText={"3"}
            text={"Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra"}
            textBgColor={"inherit"}
            iconTextColor="#fff"
            iconBgColor="#7cbb00"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <IconTitleText
            titleText={"AENEAN NONUMMY HENDRERIT MAURIS PHASELLUS PORTA FUSCE"}
            iconText={"4"}
            text={"Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra"}
            textBgColor={"inherit"}
            iconTextColor="#fff"
            iconBgColor="#7cbb00"
          />
        </Grid>
      </Grid>
    </ComponentWrapper>
  )
}
export default Principle