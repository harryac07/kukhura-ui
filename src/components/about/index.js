import React, { Component } from 'react'
import AboutOurFarm from './component/AboutOurFarm'
import WhatWeCanOffer from './component/WhatWeOffer'
import Principle from './component/OurPrinciple'
import { Divider } from 'components/common/components/Divider'
import SloganBanner from 'components/common/components/SloganBanner'

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* About farm */}
        <AboutOurFarm />
        <Divider />

        {/* What we offer */}
        <WhatWeCanOffer />

        {/* Slogan banner */}
        <SloganBanner
          bgImageUrl="https://dummyimage.com/1200x300/cccccc/000.jpg"
          sloganText="Egg is all we need when we feel low"
          textSizeLevel={2}
        />

        {/* Our Goal and Principle */}
        <Principle />
        
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
export default About;