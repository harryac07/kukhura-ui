import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { startCase } from 'lodash'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar } from '@material-ui/core';
import { OrangeButton } from 'components/common/components/Button'

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
        background: props => props.avatarBackground ? props.avatarBackground : "rgb(240, 240, 240)",
    },
    title: {
        fontSize: '22px'
    }
}));

const CommentFormat = (props) => {
    const { data, type = "comment", children } = props;
    const classes = useStyles({
        avatarBackground: type !== 'comment' ? '#E0E0E0' : null
    });
    const name = startCase(data.email.split('@')[0].replace('.', ' '));
    const avatarLetter = name.charAt(0);
    const commentDate = moment(data.created).format('MMM DD, YYYY')
    const commentOrReply = type === 'comment' ? data.comment : data.reply
    return (
        <Wrapper
            key={commentOrReply}
            bgColor={type !== 'comment' ? "rgb(240, 240, 240)" : null}
        >
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
                    {commentOrReply}
                </div>
                <OrangeButton
                    variant="contained"
                    color="primary"
                    padding="1px 5px"
                    display={type === 'comment' ? 'inline-block' : 'none'}
                    className={classes.button}
                    style={{
                        backgroundColor: '#f65314',
                        marginTop: '16px',
                        textTransform: 'none',
                        fontSize: 12
                    }}
                >
                    Reply
                </OrangeButton>
                {children}
            </div>
        </Wrapper>
    )
}

const CommentBox = (props) => {
    const { comments } = props;
    const classes = useStyles();
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
                // Render comments and replies
                comments.map(each => {
                    const replies = each.reply;
                    return (
                        <div>
                            <CommentFormat data={each} type={'comment'} >
                                {
                                    replies.map(eachReply => {
                                        return <CommentFormat
                                            data={eachReply}
                                            type={'reply'}
                                        />
                                    })
                                }
                            </CommentFormat>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommentBox

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.bgColor ? props.bgColor : '#E0E0E0'} !important;
    padding: 20px;
    margin: 20px 0px;
`