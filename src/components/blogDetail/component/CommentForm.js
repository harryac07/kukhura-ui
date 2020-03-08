import React, { useState } from 'react'
import { OrangeButton } from 'components/common/components/Button'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    textField: {
        width: '100%',
        [`& fieldset`]: {
            borderRadius: 0,
        },
    },
    loginForm: {
        width: '100%',
        margin: '0 auto !important',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '0 auto',
        },
    },
    commentForm: {
        margin: props => props.margin ? props.margin : '20px auto',
        padding: props => props.padding ? props.padding : '20px',
        position: 'relative',
        backgroundColor: props => props.backgroundColor,
    },
    CancelIcon: {
        position: 'absolute',
        color: '#f65314',
        right: 20,
        cursor: 'pointer',
        zIndex: 999,
        height: 40,
        width: 40,
    }
}));
const CommentForm = (props) => {
    const classes = useStyles({
        backgroundColor: props.backgroundColor ? props.backgroundColor : 'inherit'
    });

    const {
        submitComment,
        blogId,
        commentId, // only for replying comments
        handleCancel,
        headerText = "Leave a comment",
        headerFontSize = "28px",
        headerPadding = "0px 0px 24px 0px"
    } = props;
    const [email, onEmailChange] = useState('');
    const [comment, onCommentChange] = useState('');
    const [errorPayload, onErrorFind] = useState({});

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
            // Submit comment or reply
            if (commentId) {
                payload.reply = payload.comment;
                payload.comment = commentId;
                delete payload.blogpost;
            }
            submitComment(payload)
            formReset();
        }
    }
    return (
        <form
            className={classes.commentForm}
            noValidate
            autoComplete="off"
            onSubmit={e => handleSubmit(e)}
        >
            <Cancel
                className={classes.CancelIcon}
                onClick={() => handleCancel()}
            />

            <FormControl fullWidth className={classes.loginForm}>
                <Title
                    fontSize={headerFontSize}
                    text={headerText}
                    padding={headerPadding}
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

export default CommentForm;