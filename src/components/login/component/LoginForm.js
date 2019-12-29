import React, { useState } from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import { OrangeButton } from 'components/common/components/Button'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, TextField, Button, FormControl } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    textField: {
        width: '100%',
        [`& fieldset`]: {
            borderRadius: 0,
        },
    },
    form: {
        margin: '0 auto',
        textAlign: 'center'
    },
    loginForm: {
        width: '50%',
        margin: '0 auto !important',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '0 auto',
        },
    }
}));

const ContactForm = (props) => {
    const classes = useStyles();
    const [username, onUserNameChange] = useState('');
    const [password, onPasswordChange] = useState('');
    const [errorPayload, onErrorFind] = useState({});

    /* form rest */
    const formReset = () => {
        onUserNameChange('');
        onPasswordChange('');
    }
    /* Handle submit */
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            username,
            password,
        }

        /* Validate Form */
        if (!payload.username || !payload.password) {
            // ERROR
            const errorData = {};
            errorData.username = !payload.username ? 'Username required' : ''
            errorData.password = !payload.password ? 'Password required' : ''
            onErrorFind(errorData);
        } else {
            // NO ERROR
            props.handleLogin(payload)
            formReset();
        }
    }
    return (
        <ComponentWrapper>
            <Grid container spacing={3}>
                {/* Form Grid */}
                <Grid item xs={12} sm={12} md={12}>
                    <form
                        className={classes.form}
                        noValidate
                        autoComplete="off"
                        onSubmit={e => handleSubmit(e)}
                    >
                        <FormControl fullWidth className={classes.loginForm}>
                            <Title
                                fontSize={"28px"}
                                text={"Admin login"}
                                padding={"0px 0px 24px 0px"}
                            />
                            <TextField
                                value={username}
                                label="username"
                                onChange={(e) => {
                                    onUserNameChange(e.target.value);
                                    onErrorFind({
                                        ...errorPayload,
                                        username: ''
                                    })
                                }}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                error={!!errorPayload.username}
                                helperText={errorPayload.username}
                            />
                            <TextField
                                value={password}
                                label="password"
                                onChange={(e) => {
                                    onPasswordChange(e.target.value);
                                    onErrorFind({
                                        ...errorPayload,
                                        password: ''
                                    })
                                }}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                type="password"
                                error={!!errorPayload.password}
                                helperText={errorPayload.password}
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
                                Login
                            </OrangeButton>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </ComponentWrapper>
    )
}

export default ContactForm;