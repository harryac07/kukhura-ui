import React from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import ImageTitleTextButton from 'components/common/components/ImageTitleTextButton'
import { makeStyles } from '@material-ui/core/styles';
import { OrangeButton } from 'components/common/components/Button'
import { Grid, CircularProgress } from '@material-ui/core';
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
        margin: '40px 0px 0px 0px',
    },
    circlularLoading: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        top: '5px',
        left: '50%',
    }
}));

const BlogList = ({
    blogList,
    loadMoreBlogPosts,
    isMoreBlog,
    addSelectedBlogDetail
}) => {
    const classes = useStyles();
    const timer = React.useRef();

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleCircularLoading = () => {
        setLoading(true);
        timer.current = setTimeout(() => {
            setLoading(false);
        }, 1500);
    }
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
                            primary_image = "https://dummyimage.com/250x250/cccccc/000.jpg",
                            author = "Admin",
                            created = "",
                            updated = ""
                        } = each;
                        return (
                            <Grid item xs={12} sm={3} key={id}>
                                <ImageTitleTextButton
                                    bgImageUrl={primary_image}
                                    titleDom={
                                        <StyledLink to={`/blog/${id}`} onClick={() => {
                                            addSelectedBlogDetail(each);
                                        }}>
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
                                    onClick={() => {
                                        handleCircularLoading();
                                        loadMoreBlogPosts();
                                    }}
                                    padding="12px"
                                    className={classes.readMoreButton}
                                >
                                    Load More
                                    {
                                        loading
                                            ? <CircularProgress
                                                className={classes.circlularLoading}
                                                variant="indeterminate"
                                                thickness={4}
                                            />
                                            : null
                                    }
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
    isMoreBlog: PropTypes.bool,
    addSelectedBlogDetail: PropTypes.func,
}
export default BlogList
