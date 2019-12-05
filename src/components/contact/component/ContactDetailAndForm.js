import React, { useState } from 'react'
import { WrapperDiv } from 'components/common/commonStyle'
import { OrangeButton } from 'components/common/components/Button'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, TextField, Button, FormControl } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  maindiv: {
    padding: '100px 0px',
    width: '100%',
    background: '#fff'
  },
  paraColor: {
    color: '#7c7c7c'
  },
  textField: {
    width: '100%',
    [`& fieldset`]: {
      borderRadius: 0,
    },
  }
}));

const ContactForm = (props) => {
  const classes = useStyles();
  const [name, onNameChange] = useState('');
  const [phone, onPhoneChange] = useState('');
  const [email, onEmailChange] = useState('');
  const [message, onMessageChange] = useState('');
  const [errorPayload, onErrorFind] = useState({});

  /* form rest */
  const formReset = () => {
    onNameChange('');
    onPhoneChange('');
    onEmailChange('');
    onMessageChange('');
  }
  /* Handle submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name, phone, email, message
    }

    /* Validate Form */
    if (!payload.name || !payload.email || !payload.message) {
      // ERROR
      const errorData = {};
      errorData.name = !payload.name ? 'Required' : ''
      errorData.email = !payload.email ? 'Required' : ''
      errorData.message = !payload.message ? 'Required' : ''
      onErrorFind(errorData);
    } else {
      // NO ERROR
      console.log(payload);
      formReset();
    }
  }
  return (
    <div className={classes.maindiv}>
      <WrapperDiv>
        <Grid container spacing={3}>
          {/* Address Grid */}
          <Grid item xs={12} sm={3} md={3}>
            <Title fontSize={"28px"} text={"Contact Info"} padding={"0px 0px 24px 0px"} />
            <Typography variant="paragraph" display="block">
              8901 Marmora Road,
              <br />
              Glasgow, D04 89GR.
            </Typography>
            <p className={classes.paraColor}>
              Freephone: +1 800 559 6580<br />
              Telephone: +1 800 603 6035<br />
              FAX: +1 800 889 9898<br />
              E-mail: mail@demolink.org<br />
            </p>
          </Grid>

          {/* Form Grid */}
          <Grid item xs={12} sm={9} md={9}>
            <Title fontSize={"28px"} text={"Give us a feedback"} padding={"0px 0px 24px 0px"} />
            <form className={classes.form} noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
              <FormControl>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      value={name}
                      label="Name"
                      onChange={(e) => {
                        onNameChange(e.target.value);
                        onErrorFind({
                          ...errorPayload,
                          name: ''
                        })
                      }}
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      error={!!errorPayload.name}
                      helperText={errorPayload.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      value={email}
                      label="Email"
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
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      value={phone}
                      label="Phone"
                      onChange={(e) => onPhoneChange(e.target.value)}
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      value={message}
                      label="Message"
                      onChange={(e) => {
                        onMessageChange(e.target.value);
                        onErrorFind({
                          ...errorPayload,
                          message: ''
                        })
                      }}
                      multiline
                      rows="12"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      error={!!errorPayload.message}
                      helperText={errorPayload.message}
                    />
                    <Grid item xs={12} sm={12} md={12}>
                      <OrangeButton
                        Primary={true}
                        label={"submit"}
                        type={"submit"}
                        style={{ backgroundColor: '#f65314' }}
                      >
                        Submit
                  </OrangeButton>
                    </Grid>
                  </Grid>
                </Grid>
              </FormControl>
            </form>
          </Grid>
        </Grid>
      </WrapperDiv>
    </div>
  )
}

export default ContactForm;