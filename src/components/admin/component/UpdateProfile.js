import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, Grid, Button } from '@material-ui/core';
import Title from 'components/common/components/Title'

const useStyles = makeStyles(theme => ({
    root: {
        color: 'red'
    },
    textField: {
        width: '100%',
        [`& fieldset`]: {
            borderRadius: 0,
        },
        display: 'inline-block'
    }
}));

export const UpdateProfile = ({ cancelUpdate }) => {
    const classes = useStyles();
    // hooks
    const [userName, onUserNameChange] = useState('');
    const [email, onEmailChange] = useState('');
    const [errorPayload, onErrorFind] = useState({});

    /* form rest */
    const formReset = () => {
        onUserNameChange('');
        onEmailChange('');
    }
    /* Handle submit */
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            userName, email
        }

        /* Validate Form */
        if (!payload.userName || !payload.email) {
            // ERROR
            const errorData = {};
            errorData.userName = !payload.userName ? 'Required' : ''
            errorData.email = !payload.email ? 'Required' : ''
            onErrorFind(errorData);
        } else {
            // NO ERROR
            console.log(payload);
            formReset();
        }
    }
    return (
        <div>
            <Title fontSize={"28px"} text={"Profile"} />
            <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={e => handleSubmit(e)}
            >
                <FormControl>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={6} md={6}>
                            <TextField
                                value={userName}
                                label="username"
                                onChange={(e) => {
                                    onUserNameChange(e.target.value);
                                    onErrorFind({
                                        ...errorPayload,
                                        userName: ''
                                    })
                                }}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                error={!!errorPayload.userName}
                                helperText={errorPayload.userName}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <TextField
                                value={email}
                                label="email"
                                onChange={(e) => {
                                    onEmailChange(e.target.value);
                                    onErrorFind({
                                        ...errorPayload,
                                        email: ''
                                    })
                                }}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                error={!!errorPayload.email}
                                helperText={errorPayload.email}
                            />
                        </Grid>
                    </Grid>
                    <br />

                    {/* Action buttons */}
                    <Grid container spacing={0}>
                        <Grid item xs={6} sm={5} md={5}>
                            <Button
                                color={"primary"}
                                variant={"contained"}
                                type={"submit"}
                            >
                                Update Profile
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={4} md={4}>
                            <Button
                                color={"secondary"}
                                variant={"contained"}
                                onClick={() => cancelUpdate(false)}
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </FormControl>
            </form>
        </div>
    )
}

export default UpdateProfile;