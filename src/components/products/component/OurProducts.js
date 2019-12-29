import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { truncate } from 'lodash'
import { OrangeButton } from 'components/common/components/Button'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import TitleTextButtonfrom from 'components/common/components/ImageTitleTextButton'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    subtitle: {
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 14,
        color: '#000'
    },
    readMoreButton: {
        display: 'block',
        borderRadius: '0px',
        margin: '10px 0px 0px 0px',
        fontSize: 11
    }
}));

const OurProducts = (props) => {
    const classes = useStyles();
    const [showMoreHeroProduct, onShowMoreHeroProductChange] = useState(false);
    const { allProducts, heroProduct } = props;
    const { title = "", description = "" } = heroProduct[0] || {};

    return (
        <ComponentWrapper color="#7c7c7c">
            <Title text={"Our products"} padding="0px 0px 24px 0px" />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Typography
                        className={classes.subtitle}
                        fontWeight="bold"
                        variant="h6"
                    >
                        {title.toUpperCase()}
                    </Typography>
                    <Typography variant="p">
                        {
                            truncate(description || "", {
                                'length': showMoreHeroProduct ? description.length : 1000,
                            })
                        }
                        {
                            description && description.length > 1000
                                ? <OrangeButton
                                    onClick={() => onShowMoreHeroProductChange(!showMoreHeroProduct)}
                                    padding="10px 10px"
                                    className={classes.readMoreButton}
                                >
                                {!showMoreHeroProduct ? 'Show more' : 'Show less'}
                                </OrangeButton>
                                : null
                        }
                    </Typography>
                </Grid>
            </Grid>
        </ComponentWrapper>
    )
}

OurProducts.propTypes = {
    heroProduct: PropTypes.array.isRequired,
    allProducts: PropTypes.array.isRequired
}
export default OurProducts