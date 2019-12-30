import React, { Component } from 'react'
import { compose } from "redux";
import { connect } from "react-redux";

import Loader from 'components/common/components/CommonLoader'
import OurProducts from './component/OurProducts'
import EggsAndChiken from './component/EggsAndChicken'
import { Divider } from 'components/common/components/Divider'
import SloganBanner from 'components/common/components/SloganBanner'

import { getProducts } from './action'

class Products extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getProducts();
    }
    render() {
        const { products, hero_product } = this.props.product;
        if(products.length===0){
            return <Loader showLoader />
        }
        return (
            <div>
                {/* OurProducts */}
                <OurProducts heroProduct={hero_product} />

                {/* organic Eggs */}
                <EggsAndChiken allProducts={products} />
                <Divider />

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
const mapStateToProps = state => {
    return {
        product: state.product
        // router: state.router
    };
};

const withConnect = connect(mapStateToProps, {
    getProducts
});


export default compose(withConnect)(Products);
