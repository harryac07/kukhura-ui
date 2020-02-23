import React, { useState } from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import { OrangeButton } from 'components/common/components/Button'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField, FormControl } from '@material-ui/core';

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
    }
}));

const Comment = (props) => {
    const classes = useStyles();

    const { submitComment, blogId } = props;
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
            // Submit comment
            submitComment(payload)
            formReset();
        }
    }
    return (
        <div className={classes.mainDiv}>
            <Grid container spacing={3}>
                {/* Form Grid */}
                <Grid item xs={12} sm={12} md={12}>
                    <form
                        // className={classes.form}
                        noValidate
                        autoComplete="off"
                        onSubmit={e => handleSubmit(e)}
                    >
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
                </Grid>
            </Grid>
        </div>
    )
}

export default Comment;