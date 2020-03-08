import React, { useState } from 'react'
import { OrangeButton } from 'components/common/components/Button'
import CommentForm from './CommentForm'
import CommentBox from './CommentBox'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AddComment } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    mainDiv: {
        marginTop: 30,
        [theme.breakpoints.down('sm')]: {
            marginTop: 20,
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
    }
}));

const Comment = (props) => {
    const classes = useStyles();

    const { submitComment,dispatchReplyCreate, blogId } = props;
    const [showCommentForm, onToggleCommentButton] = useState(false);

    return (
        <div className={classes.mainDiv}>
            {
                !showCommentForm
                    ? <OrangeButton
                        variant="contained"
                        color="primary"
                        padding="5px 10px"
                        className={classes.button}
                        onClick={() => {
                            onToggleCommentButton(!showCommentForm);
                        }}
                        endIcon={<AddComment
                            className={classes.AddCommentIcon}
                            color="#000"
                        />}
                    >
                        Add comment
                    </OrangeButton>
                    : null
            }
            <Grid container spacing={3}>
                {/* Form Grid */}
                <Grid item xs={12} sm={12} md={12}>
                    <br />
                    {
                        showCommentForm
                            ? <CommentForm
                                submitComment={submitComment}
                                blogId={blogId}
                                handleCancel={() => {
                                    onToggleCommentButton(!showCommentForm);
                                }}
                            />
                            : <CommentBox 
                                comments={props.postComments} 
                                dispatchReplyCreate={dispatchReplyCreate}
                                />
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Comment;