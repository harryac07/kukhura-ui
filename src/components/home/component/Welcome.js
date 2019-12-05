import React from 'react'
import { withRouter } from 'react-router-dom'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import { OrangeButton } from 'components/common/components/Button'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  maindiv: {
    padding: '100px 0px',
    width: '100%',
    background: '#f0f0f0'
  },
  buttonAboutUs: {
    marginRight: 10,
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

const WelcomeGreeting = (props) => {
  const classes = useStyles();
  return (
    <ComponentWrapper backgroundColor="#f0f0f0">
      <Grid container spacing={3}>
        <Title text="Welcome!" />
        <Grid item xs={12} sm={7} md={7}>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nommy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci.
          </p>
        </Grid>
        <Grid item xs={12} sm={0} md={1} className={classes.spacingColumn}>

        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <p>
            <OrangeButton
              variant="raised"
              className={classes.buttonAboutUs}
              onClick={() => props.history.push('/about')}
            >
              About us
            </OrangeButton>
            <OrangeButton
              onClick={() => props.history.push('/contact')}
            >
              Contact us
            </OrangeButton>
          </p>
        </Grid>
      </Grid>
    </ComponentWrapper>
  )
}
export default withRouter(WelcomeGreeting)