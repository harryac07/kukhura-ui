import React from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import PropTypes from 'prop-types';
import ImageTitleTextButton from 'components/common/components/ImageTitleTextButton'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';
import moment from 'moment';
import { startCase } from 'lodash';
import { Typography } from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import { OrangeButton } from 'components/common/components/Button'


const useStyles = makeStyles(theme => ({
    fadedTextColor: {
        color: '#7c7c7c'
    },
    blackTextColor: {
        color: '#000'
    },
    ServicesH3: {
        fontWeight: 'bold'
    },
    item: {
        backgroundColor: props => props.textBgColor,
        position: 'relative',
        // borderRadius: 10,
        padding: '30px 0px 0px 0px',
        minHeight: 150,
        background: 'transparent',
        color: '#000'
    },
    backgroundImage: {
        background: props => props.bgImageUrl,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        minHeight: '500px'
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
    },
    backIcon: {
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        top: 5,
        [theme.breakpoints.down('md')]: {
            top: 0,
        },
    }
}));

const BlogPostDetail = ({ post = {}, goBack }) => {
    const {
        id = "",
        title = "",
        description = "",
        author = "",
        post_primary_image = "",
        created = "Admin",
        comments = []
    } = post;
    const classes = useStyles(
        {
            bgImageUrl: `url("${post_primary_image}")`
        }
    );

    return (
        <ComponentWrapper>
            <OrangeButton
                bgColor='gray'
                padding="2px 12px"
                display='block'
                onClick={goBack}
            >
                <KeyboardArrowLeft
                    color={"action"}
                    className={classes.backIcon}
                />
                <span style={{ marginLeft: 10 }}>Back</span>
            </OrangeButton>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} key={id}>

                    {/* image background */}
                    <div className={classes.backgroundImage} />

                    <div className={classes.item}>
                        {
                            /* title */
                            <Typography className={classes.ServicesH3} variant="p">
                                {title.toUpperCase()}
                            </Typography>
                        }
                        {/* text */}
                        <p className={classes.serviceTextColor}>
                            <div>
                                <p className={classes.fadedTextColor}>
                                    {moment(created).format('LL')}
                                    ,&nbsp; By
                                    <span className={classes.fadedTextColor}>               {startCase(author)}
                                    </span>
                                </p>
                                <br />
                                <br />
                                <p className={classes.blackTextColor}>
                                    {description}
                                </p>
                            </div>
                        </p>
                    </div>
                </Grid>
            </Grid>
        </ComponentWrapper>
    )
}
BlogPostDetail.propTypes = {
    post: PropTypes.object
}
export default BlogPostDetail
