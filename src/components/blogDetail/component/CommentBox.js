import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { startCase } from 'lodash'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    mainDiv: {
        marginTop: 30,
        [theme.breakpoints.down('sm')]: {
            marginTop: 20,
        },
    },
    textField: {
        width: '100%',
        [`& fieldset`]: {
            borderRadius: 0,
        },
    },
    form: {
        margin: '0 auto',
        textAlign: 'left'
    },
    loginForm: {
        width: '100%',
        margin: '0 auto !important',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '0 auto',
        },
    },
    AddCommentIcon: {
        textAlign: 'center',
        position: 'relative',
        left: 0,
        top: 5,
        [theme.breakpoints.down('md')]: {
            top: 5,
        },
    },
    commentForm: {
        position: 'relative'
    },
    CancelIcon: {
        position: 'absolute',
        color: '#f65314',
        right: 0,
        cursor: 'pointer',
        zIndex: 999,
        height: 40,
        width: 40,
    },
    commentBox: {
        width: '100%',
        marginLeft: 15
    },
    avatar: {
        color: "#f65314",
        background: "rgb(240, 240, 240)"
    },
    title: {
        fontSize: '22px'
    }
}));

const CommentBox = (props) => {
    const { comments } = props;
    const classes = useStyles();
    const renderSingleComment = (data) => {
        const name = startCase(data.email.split('@')[0].replace('.', ' '));
        const avatarLetter = name.charAt(0);
        const commentDate = moment(data.created).format('MMM DD, YYYY')
        return (
            <Wrapper key={data.comment}>
                <div className={classes.avatarDiv}>
                    <Avatar variant="square" className={classes.avatar} >{avatarLetter}</Avatar>
                </div>
                <div className={classes.commentBox}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <strong>{name}</strong>
                        <span>{commentDate}</span>
                    </div>
                    <br />
                    <div>
                        {data.comment}
                    </div>

                    {/* 
                    
                    Will be implemented in future
                    
                    <OrangeButton
                        variant="contained"
                        color="primary"
                        padding="1px 5px"
                        className={classes.button}
                        style={{
                            backgroundColor: '#f65314',
                            marginTop: '16px',
                            textTransform: 'none',
                            fontSize: 12
                        }}
                    >
                        Reply
                    </OrangeButton> */}
                </div>
            </Wrapper>
        )
    }
    return (
        <div>
            <Typography className={classes.title} variant="p">
                {
                    comments.length > 1
                        ? `${comments.length} Comments`
                        : `${comments.length} Comment`
                }
            </Typography>
            {
                comments.map(each => {
                    return renderSingleComment(each)
                })
            }
        </div>
    )
}

export default CommentBox

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #E0E0E0;
    padding: 20px;
    margin: 20px 0px;
`