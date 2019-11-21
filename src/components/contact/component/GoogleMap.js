import React from 'react'
import GoogleMapReact from 'google-map-react';
import { WrapperDiv } from 'components/common/commonStyle'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  maindiv: {
    padding: '100px 0px',
    width: '100%',
    background: '#f0f0f0',
  },
}));

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = (props) => {
  const classes = useStyles();
  const defaultValue = {
    center: {
      lat: 27.6727,
      lng: 85.3253
    },
    zoom: 20
  };
  return (
    <div className={classes.maindiv}>
      <WrapperDiv>
        <Title text={"Contact us"} padding={"0px 0px 24px 0px"} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <div style={{ height: '50vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBLkC8Nxs4l1pXwv7T_N4gqgi3lpwuxsc4irah' }}
                defaultCenter={defaultValue.center}
                defaultZoom={defaultValue.zoom}
                // yesIWantToUseGoogleMapApiInternals={true}
              >
                <AnyReactComponent
                  lat={27.6727}
                  lng={85.3253}
                  text="here"
                />
              </GoogleMapReact>
            </div>
          </Grid>
        </Grid>
      </WrapperDiv>
    </div>
  )
}

export default GoogleMap;