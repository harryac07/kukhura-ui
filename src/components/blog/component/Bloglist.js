import React from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import ImageTitleTextButton from 'components/common/components/ImageTitleTextButton'
import { makeStyles } from '@material-ui/core/styles';
import { OrangeButton } from 'components/common/components/Button'
import Grid from '@material-ui/core/Grid';
import { StyledLink } from 'components/common/components/Link'
import moment from 'moment';
import { truncate } from 'lodash';

const useStyles = makeStyles(theme => ({
    fadedTextColor: {
        color: '#7c7c7c'
    },
    blackTextColor: {
        color: '#000'
    },
    centerDiv: {
        width: '100%',
        display: 'block',
        textAlign: 'center'
    },
    readMoreButton: {
        width: '40%',
        borderRadius: '15px',
        margin: '40px 0px 0px 0px'
    }
}));

const BlogList = ({ blogList, loadMoreBlogPosts, isMoreBlog }) => {
    const classes = useStyles();
    return (
        <ComponentWrapper backgroundColor="#f0f0f0">
            <Grid container spacing={3}>
                {
                    /* Render Blog Post Dynamically */
                    blogList.map(each => {
                        const {
                            id = "",
                            title = "",
                            description = "",
                            post_primary_image = "https://dummyimage.com/250x250/cccccc/000.jpg",
                            author = "Admin",
                            created = "",
                            updated = ""
                        } = each;
                        return (
                            <Grid item xs={12} sm={3} key={id}>
                                <ImageTitleTextButton
                                    bgImageUrl={post_primary_image}
                                    titleDom={
                                        <StyledLink to={'/blog/' + id}>
                                            {
                                                truncate(title.toUpperCase() || "", {
                                                    'length': 100,
                                                })
                                            }
                                        </StyledLink>
                                    }
                                    textDom={
                                        <div>
                                            <p className={classes.blackTextColor}>
                                                {moment(created).format('LL')}
                                            </p>
                                            <p className={classes.fadedTextColor}>
                                                {
                                                    truncate(description || "", {
                                                        'length': 150,
                                                    })
                                                }
                                            </p>
                                        </div>
                                    }
                                    button={false}
                                    buttonText={"read more"}
                                    textBgColor={"#f0f0f0"}
                                />
                            </Grid>
                        )
                    })
                }
                {
                    isMoreBlog
                        ? <Grid item xs={12} sm={12}>
                            <div className={classes.centerDiv}>
                                <OrangeButton
                                    onClick={loadMoreBlogPosts}
                                    padding="12px"
                                    className={classes.readMoreButton}
                                >
                                    Load More
                            </OrangeButton>
                            </div>
                        </Grid>
                        : null
                }
            </Grid>
        </ComponentWrapper>
    )
}
BlogList.propTypes = {
    blogList: PropTypes.array,
    isMoreBlog: PropTypes.bool
}
export default BlogList
