import React, { Component } from 'react'
import { Divider } from 'components/common/components/Divider'
import SloganBanner from 'components/common/components/SloganBanner'
import GoogleMap from './component/GoogleMap';
import ContactInfo from './component/ContactDetailAndForm';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Google Map */}
        <GoogleMap />
        <Divider />
        <ContactInfo />
        {/* Slogan banner */}
        <SloganBanner
          bgImageUrl="https://dummyimage.com/1200x300/cccccc/000.jpg"
          sloganText="Consume fresh egg everyday! Quality can't be compromised."
          textSizeLevel={2}
        />
      </div>
    )
  }
}
export default Contact;