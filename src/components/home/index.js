import React, { Component } from 'react'
import { compose } from "redux";
import { connect } from "react-redux";
import styled from 'styled-components';
import { take } from 'lodash'

import HeroCarousel from './component/HeroCarousel'
import WelcomeGreeting from './component/Welcome'
import Product from './component/Products'
import Services from './component/Services'
import NewsAndOffer from './component/NewsAndOffer'
import Gallery from './component/Gallery'
import { Divider } from 'components/common/components/Divider'
import SloganBanner from 'components/common/components/SloganBanner'

import { test, getRecentPosts } from './action'
/* Actions from other components/views to load data initially */
import { fetchBlogList } from 'components/blog/action';
import { getProducts } from 'components/products/action'

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

        // dispatch action to load data initially
        // check if data already and prevent refetch here
        const { products, blogs } = this.props;
        if (products.length === 0) {
            this.props.getProducts();
        }
        if (blogs.length === 0) {
            this.props.fetchBlogList();
        }

    }
    render() {
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
                <Services products={take(this.props.products, 3)} />

                {/* Slogan image background */}
                <SloganBanner
                    bgImageUrl="https://dummyimage.com/1200x300/cccccc/000.jpg"
                    sloganText="An egg a day keeps the doctor away"
                    textSizeLevel={2}
                />

                {/* News/Posts and offers */}
                <NewsAndOffer recentPosts={take(this.props.blogs, 3)} />
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
        router: state.router,
        products: state.product.products,
        blogs: state.blog.blogList,
    };
};

const withConnect = connect(mapStateToProps, {
    test,
    getRecentPosts,

    fetchBlogList,
    getProducts
});


export default compose(withConnect)(Home);