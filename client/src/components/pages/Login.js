import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  TextField,
  Snackbar,
  Button,
  Typography,
  CssBaseline,
} from '@material-ui/core';
import logoIcon from '../assets/logo.png';
import { useStyles } from '../themes/loginSignupStyle';
import AuthContext from '../context/auth/authContext';

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;
  const { login, message, clearMessage, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated && message === 'Successfully logged in.') {
      props.history.push('/');
    }
    if (message === 'Invalid Username or Password') {
      setErrMsg('Invalid Username or Password');
      setOpen(true);
      clearMessage();
    }
    // eslint-disable-next-line
  }, [message, isAuthenticated, props.history]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setUser({ ...user, [name]: value.toLowerCase() });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrMsg('Please enter valid email and password');
      setOpen(true);
    } else {
      login({
        email,
        password,
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} sm={4} className={classes.image}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.logoContainer}
          >
            <img src={logoIcon} alt="logo" className={classes.img} />
            <Typography className={classes.logoHeader}>
              RECEIPT TRACKER
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography display="inline" className={classes.disableText}>
                  Don't have an account?
                </Typography>
                <Link className={classes.link} to="/signup">
                  <Button
                    variant="contained"
                    className={classes.loginSignupBtn}
                  >
                    Create
                  </Button>
                </Link>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.form}>
              <Typography variant="h4" className={classes.typography}>
                Welcome back!
              </Typography>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message={errMsg}
              />

              <form onSubmit={onSubmit} noValidate autoComplete="off">
                <TextField
                  TextField
                  className={classes.textField}
                  id="email"
                  label="Email Address"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                  fullWidth
                />
                <TextField
                  TextField
                  className={classes.textField}
                  id="password"
                  label="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  onKeyDown={handleKeyDown}
                  required
                  fullWidth
                />
                <Button
                  type="submit"
                  className={classes.submit}
                  variant="outlined"
                  color="secondary"
                >
                  Login
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
