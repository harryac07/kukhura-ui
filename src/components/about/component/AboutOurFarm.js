import React from 'react'
import { P, WrapperDiv } from 'components/common/commonStyle'
import TitleTextButtonfrom from 'components/common/components/ImageTitleTextButton'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  maindiv: {
    padding: '100px 0px',
    width: '100%',
    background: '#fff'
  },
  item: {
    position: 'relative',
    padding: '30px 0px 0px 0px',
    minHeight: 150,
    background: '#fff',
    color: '#000'
  },
  backgroundImage: {
    background: 'url("https://dummyimage.com/300x250/cccccc/000.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    minHeight: '230px',
  },
  spacingColumn: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const AboutOurFarm = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.maindiv}>
      <WrapperDiv>
        <Title text={"About our farm"} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <div className={classes.item}>
              <div className={classes.backgroundImage} />
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TitleTextButtonfrom
              title={"AENEAN AUCTOR WISI ET URNA. ALIQUAM ERAT VOLUTPAT. DUIS AC TURPIS. INTEGER RUTRUM ANTE EU LACUS. LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT."}
              textDom={
                <span>
                  Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus hendrerit mauris porta.
                  <br /><br />
                  Fusce suscipit varius mi. Quisque nulla. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit .
                </span>
              }
              button={false}
              buttonText={"read more"}
            />
          </Grid>
        </Grid>
      </WrapperDiv>
    </div>
  )
}
export default AboutOurFarm