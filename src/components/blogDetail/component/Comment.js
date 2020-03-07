import React, { useState } from 'react'
import { OrangeButton } from 'components/common/components/Button'
import Title from 'components/common/components/Title'
import CommentBox from './CommentBox'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField, FormControl } from '@material-ui/core';
import { AddComment, Cancel } from '@material-ui/icons';

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
    }
}));

const Comment = (props) => {
    const classes = useStyles();

    const { submitComment, blogId } = props;
    const [email, onEmailChange] = useState('');
    const [comment, onCommentChange] = useState('');
    const [errorPayload, onErrorFind] = useState({});
    const [showCommentForm, onToggleCommentButton] = useState(false);

    /* form rest */
    const formReset = () => {
        onEmailChange('');
        onCommentChange('');
    }
    /* Handle submit */
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email,
            comment,
            blogpost: blogId
        }

        /* Validate Form */
        if (!payload.email || !payload.comment) {
            // ERROR
            const errorData = {};
            errorData.email = !payload.email ? 'Email required' : ''
            errorData.comment = !payload.comment ? 'Comment required' : ''
            onErrorFind(errorData);
        } else {
            // Submit comment
            submitComment(payload)
            formReset();
        }
    }

    const renderForm = () => {
        return (
            <form
                className={classes.commentForm}
                noValidate
                autoComplete="off"
                onSubmit={e => handleSubmit(e)}
            >
                <Cancel
                    className={classes.CancelIcon}
                    onClick={() => {
                        onToggleCommentButton(!showCommentForm);
                    }}
                />

                <FormControl fullWidth className={classes.loginForm}>
                    <Title
                        fontSize={"28px"}
                        text={"Leave a comment"}
                        padding={"0px 0px 24px 0px"}
                    />
                    <TextField
                        value={email}
                        label="Email"
                        required
                        onChange={(e) => {
                            onEmailChange(e.target.value);
                            onErrorFind({
                                ...errorPayload,
                                email: ''
                            })
                        }}
                        type="email"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        error={!!errorPayload.email}
                        helperText={errorPayload.email}
                    />
                    <TextField
                        value={comment}
                        label="Comment"
                        required
                        name="comment"
                        onChange={(e) => {
                            onCommentChange(e.target.value);
                            onErrorFind({
                                ...errorPayload,
                                comment: ''
                            })
                        }}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        multiline
                        rowsMax={10}
                        rows={6}
                        error={!!errorPayload.comment}
                        helperText={errorPayload.comment}
                    />
                    <OrangeButton
                        Primary={true}
                        display={'inline-block'}
                        width={'100%'}
                        label={"submit"}
                        type={"submit"}
                        style={{
                            backgroundColor: '#f65314',
                            marginTop: '16px'
                        }}
                    >
                        Submit
                    </OrangeButton>
                </FormControl>
            </form>
        )
    }

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
                            ? renderForm()
                            : <CommentBox comments={props.postComments} />
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Comment;