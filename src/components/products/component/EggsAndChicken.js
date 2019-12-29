import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { truncate } from 'lodash'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import Title from 'components/common/components/Title'
import ImageTitleText from 'components/common/components/ImageTitleTextButton'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    maindiv: {
        padding: '100px 0px',
        width: '100%',
        background: '#f0f0f0',
    }
}));

const EggsAndChiken = (props) => {
    const classes = useStyles();
    const [showMoreProduct, onShowMoreProductChange] = useState(false);
    const { allProducts } = props
    return (
        <ComponentWrapper backgroundColor="#f0f0f0">
            <Title text={"Organic Products"} padding="0px 0px 24px 0px" />
            <Grid container spacing={3}>
                {
                    allProducts
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
                                                'length': showMoreProduct ? description.length : 100,
                                            })
                                        }
                                        textBgColor={"inherit"}
                                    />
                                </Grid>
                            )
                        })
                }
            </Grid>
        </ComponentWrapper>
    )
}

EggsAndChiken.propTypes = {
    allProducts: PropTypes.array.isRequired
}
export default EggsAndChiken