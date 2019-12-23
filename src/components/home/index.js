import React, { Component } from 'react'
import { compose } from "redux";
import { connect } from "react-redux";
import styled from 'styled-components';

import HeroCarousel from './component/HeroCarousel'
import WelcomeGreeting from './component/Welcome'
import Product from './component/Products'
import Services from './component/Services'
import NewsAndOffer from './component/NewsAndOffer'
import Gallery from './component/Gallery'
import { Divider } from 'components/common/components/Divider'
import SloganBanner from 'components/common/components/SloganBanner'

import { test, getRecentPosts } from './action'

const SloganDiv = styled.div`
  background-image: url("https://dummyimage.com/1200x300/cccccc/000.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // dispatch action
    this.props.test();
    this.props.getRecentPosts();
  }
  render() {
    const { recentPosts } = this.props.home;
    return (
      <div>
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Hello welcome */}
        <WelcomeGreeting />

        {/* Product overview link */}
        <Product />
        <Divider />

        {/* Services and Products */}
        <Services />

        {/* Slogan image background */}
        <SloganBanner
          bgImageUrl="https://dummyimage.com/1200x300/cccccc/000.jpg"
          sloganText="An egg a day keeps the doctor away"
          textSizeLevel={2}
        />

        {/* News/Posts and offers */}
        <NewsAndOffer recentPosts={recentPosts} />
        <Divider />

        {/* Our gallery */}
        <Gallery />

      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    home: state.home,
    router: state.router
  };
};

const withConnect = connect(mapStateToProps, {
  test,
  getRecentPosts
});


export default compose(withConnect)(Home);