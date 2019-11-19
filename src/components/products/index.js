import React, { Component } from 'react'
import OurProducts from './component/OurProducts'
import EggsAndChiken from './component/EggsAndChicken'
import { Divider } from 'components/common/components/Divider'
import SloganBanner from 'components/common/components/SloganBanner'

class Products extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* OurProducts */}
        <OurProducts />

        {/* organic Eggs */}
        <EggsAndChiken />
        <Divider/>

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
export default Products;