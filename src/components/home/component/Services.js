import React from 'react'
import { truncate } from 'lodash'

import ComponentWrapper from 'components/common/components/ComponentWrapper'
import ImageTitleTextButton from 'components/common/components/ImageTitleTextButton'
import Title from 'components/common/components/Title'
import { Grid } from '@material-ui/core';

const Services = ({ products }) => {
    return (
        <ComponentWrapper>
            <Title text={"Our products and services"} padding="0px 0px 24px 0px" />
            <Grid container spacing={3}>
                {
                    products.map(each => {
                        const {
                            id = "",
                            title = "",
                            description = "",
                            product_primary_image = "https://dummyimage.com/250x250/cccccc/000.jpg",
                            author = "Admin",
                            created = "",
                            updated = ""
                        } = each;
                        return (
                            <Grid item xs={12} sm={4} key={id}>
                                <ImageTitleTextButton
                                    bgImageUrl={product_primary_image}
                                    title={
                                        truncate(title.toUpperCase() || "", {
                                            'length': 300,
                                        })
                                    }
                                    text={
                                        truncate(description || "", {
                                            'length': 280,
                                        })
                                    }
                                    button={true}
                                    buttonText={"read more"}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </ComponentWrapper>
    )
}
export default Services