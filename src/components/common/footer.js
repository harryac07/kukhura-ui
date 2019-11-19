import React from 'react'
import { P, WrapperDiv } from 'components/common/commonStyle'
import { OrangeButton } from 'components/common/components/Button'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Link } from '@material-ui/core';
import { Facebook, Mail, Call, WhatsApp, YouTube } from '@material-ui/icons';
import { StyledLink } from './components/Link';

const useStyles = makeStyles(theme => ({
  maindiv: {
    padding: '100px 0px',
    width: '100%',
    background: '#49515C',
    color: '#eee',
    fontSize: 16
  },
  textField: {
    width: '100%',
    border: '1px solid #eee',
    color: '#ccc'
  },
  titleText: {
    marginTop: 0,
  },
  icons: {
    background: '#eee',
    margin: '5px',
    padding: 5,
    color: '#000',
    cursor: 'pointer',
    borderRadius: '50%',
    '& :hover': {
      background: '#000',
      color: 'rgb(246, 83, 20)'
    }
  },
  ServicesH3: {
    fontWeight: 'bold'
  },
  backgroundImageOne: {
    backgroundImage: 'url("https://dummyimage.com/400x250/cccccc/000.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    minHeight: '250px',
  },
  serviceTextColor: {
    color: '#7c7c7c'
  },
  readMoreButton: {
    fontSize: '14px',
  },
  MailLink: {
    textDecoration: 'none',
    color: '#fff'
  }
}));
const Footer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.maindiv}>
      <WrapperDiv className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <P fontSize={'36px'} className={classes.titleText}>
              Contact us
            </P>
            <div>
              Tokha Road<br />
              Kathmandu<br />
              <a className={classes.MailLink} href="mailto:info@example.com">info@example.com</a>
              <br /><br />
              (+977)9841010101<br />
              (+977)9841010101<br />
              NEPAL
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <P fontSize={'36px'} className={classes.titleText}>
              Follow us
            </P>
            <Facebook className={classes.icons} circled fontSize={"large"} />
            <Mail className={classes.icons} circled fontSize={"large"} />
            <Call className={classes.icons} circled fontSize={"large"} />
            <WhatsApp className={classes.icons} circled fontSize={"large"} />
          </Grid>
          <Grid item xs={12} sm={2}>
            <P fontSize={'36px'} className={classes.titleText}>
              Menu
            </P>
            <StyledLink block>Home</StyledLink>
            <StyledLink block>About</StyledLink>
            <StyledLink block>Services</StyledLink>
            <StyledLink block>Products</StyledLink>
            <StyledLink block>Contact Us</StyledLink>
            <StyledLink block>Blogs</StyledLink>
          </Grid>
          <Grid item xs={12} sm={4}>
            <P fontSize={'36px'} className={classes.titleText}>
              Join our newsletter
            </P>
            <p>
              Don't miss anything from us. Always stay informed of our products and offers!
            </p>
            <TextField
              id="outlined-basic"
              className={classes.textField}
              label="Enter your email here"
              type="email"
              color="primary"
              margin="normal"
              variant="outlined"
              onChange={(e) => console.log(e.target.value)}
              InputLabelProps={{
                style: {
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  width: '100%',
                  color: '#ccc'
                }
              }}
            />
          </Grid>
        </Grid>
      </WrapperDiv>
    </div>
  )
}
export default Footer