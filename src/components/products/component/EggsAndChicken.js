import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { truncate, take } from 'lodash'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import Title from 'components/common/components/Title'
import ImageTitleText from 'components/common/components/ImageTitleTextButton'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { OrangeButton } from 'components/common/components/Button'

const useStyles = makeStyles(theme => ({
    maindiv: {
        padding: '100px 0px',
        width: '100%',
        background: '#f0f0f0',
    },
    centerDiv: {
        width: '100%',
        display: 'block',
        textAlign: 'center'
    },
    readMoreButton: {
        width: '40%',
        borderRadius: '15px',
        margin: '0px 0px 0px 0px'
    }
}));

const EggsAndChiken = (props) => {
    const classes = useStyles();
    const [showMoreProduct, onShowMoreProductChange] = useState(false);
    const [loadMoreProducts, onLoadMoreProductsChange] = useState(3);

    const { allProducts } = props
    const allProductsWithoutHeroProduct = allProducts.filter(each => !each.hero_product);
    const filteredAndTruncatedProducts = take(
        allProductsWithoutHeroProduct,
        loadMoreProducts
    )
    const allProductsShown = loadMoreProducts >= allProductsWithoutHeroProduct.length
    return (
        <ComponentWrapper backgroundColor="#f0f0f0">
            <Title text={"Organic Products"} padding="0px 0px 24px 0px" />
            <Grid container spacing={3}>
                {/* display all Products */}
                {
                    filteredAndTruncatedProducts
                        .filter(each => !each.hero_product)
                        .map(each => {
                            const {
                                id = "",
                                title = "",
                                description = "",
                                product_primary_image = ""
                            } = each;
                            return (
                                <Grid item xs={12} sm={4} key={id}>
                                    <ImageTitleText
                                        bgImageUrl={product_primary_image || undefined}
                                        title={title.toUpperCase()}
                                        text={
                                            truncate(description || "", {
                                                'length': showMoreProduct ? description.length : 200,
                                            })
                                        }
                                        textBgColor={"inherit"}
                                    />
                                </Grid>
                            )
                        })
                }

                {/* Load more button  */}
                {
                    allProductsShown
                        ? null
                        : <Grid item xs={12} sm={12}>
                            <div className={classes.centerDiv}>
                                <OrangeButton
                                    onClick={() =>
                                        loadMoreProducts < allProductsWithoutHeroProduct.length
                                            ? onLoadMoreProductsChange(loadMoreProducts + 3)
                                            : onLoadMoreProductsChange(allProductsWithoutHeroProduct.length)
                                    }
                                    padding="12px"
                                    className={classes.readMoreButton}
                                >
                                    Show More
                                </OrangeButton>
                            </div>
                        </Grid>
                }
            </Grid>
        </ComponentWrapper>
    )
}

EggsAndChiken.propTypes = {
    allProducts: PropTypes.array.isRequired
}
export default EggsAndChiken