import React from 'react'
import { truncate } from 'lodash'
import { withRouter } from 'react-router-dom'

import ComponentWrapper from 'components/common/components/ComponentWrapper'
import ImageTitleTextButton from 'components/common/components/ImageTitleTextButton'
import Title from 'components/common/components/Title'
import { Grid } from '@material-ui/core';

const Services = (props) => {
    const { products, history } = props;
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
                            primary_image = "https://dummyimage.com/250x250/cccccc/000.jpg",
                            author = "Admin",
                            created = "",
                            updated = ""
                        } = each;
                        return (
                            <Grid item xs={12} sm={4} key={id}>
                                <ImageTitleTextButton
                                    bgImageUrl={primary_image}
                                    title={
                                        truncate(title.toUpperCase() || "", {
                                            'length': 60,
                                        })
                                    }
                                    text={
                                        truncate(description || "", {
                                            'length': 280,
                                        })
                                    }
                                    button={true}
                                    buttonText={"read more"}
                                    onButtonClick={() => history.push(`/product/${id}/`)}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </ComponentWrapper>
    )
}
export default withRouter(Services)