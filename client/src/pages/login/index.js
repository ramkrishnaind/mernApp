import React, { useState } from 'react';
import './login.css';
import {
  Grid,
  Typography,
  Paper, Card,
  Box, makeStyles,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  Link
} from '@material-ui/core';
import bannerImage from "../../images/banner-2.jpeg";
import googleIcon from "../../images/icon-google.png";
import facebookIcon from "../../images/facebook.png";
import * as LoginAction from "../../redux/actions/LoginAction";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#4B2353",
    fontSize: 30,
    marginBottom: 20
  },
  text2: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#8C8C8C",
    fontSize: 14,
    marginTop: 10,
  },
  text3: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FFFFFF",
    fontSize: 14,
  },
  text4: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  login: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gridStyle2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  gridStyle3: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  textField: {
    borderRadius: 5,
    borderColor: '#FFFFFF',
  },
  notchedOutline: {
    borderWidth: "1px",
    borderRadius: 25,
    borderColor: "#dddddd !important",
    boxShadow: 1,
  },
  btn2: {
    borderRadius: 20,
    background: '#FF7601',
    color: '#FFFFFF',
    textTransform: 'none',
    fontFamily: 'Open Sans,sans-serif',
    paddingLeft: 30,
    paddingRight: 30
  },
  iconContainer: {
    borderRadius: 40,
    padding: 10,
    cursor: 'pointer'
  },
  icon: {
    width: 25,
    height: 25,
  },
  main: {
    marginTop: 100,
    marginBottom: 100,
    width: 400,
    padding: 40,
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 10
  }
}));

const LoginPage = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = React.useState(false);
  const initialState = {
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialState);

  const inputChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  const loginSubmit = (e) => {
    const { email, password } = state;
    let reqData = {
      email: email,
      password: password,
    };
    console.log("reqData  ", reqData);
    dispatch(LoginAction.LoginRequestAsync(reqData));
  };
  const handleChange = e => {
    //
  }

  return (
    <div
      className={`${classes.bannerContainer}`}
      style={{
        backgroundImage: `url(${bannerImage}`,
        // height: 326,
        overflow: "hidden",
        textAlign: "center",
        backgroundSize: 'cover',
        position: "relative",
        backgroundPosition: "center",
      }}>
      <Paper className={classes.main}>
        <Grid container>
          <Grid item sm={12} md={12} className={classes.login}>
            <Typography className={classes.text1}>Login In</Typography>
            <TextField
              className={classes.textField}
              placeholder="Username or Email"
              variant="outlined"
              fullWidth
              name="email"
              value={state.email}
              onChange={inputChange}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
            <Box style={{ height: 20 }} />
            <TextField
              className={classes.textField}
              placeholder="Password"
              variant="outlined"
              name="password"
              type="password"
              value={state.password}
              onChange={inputChange}
              fullWidth
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={12} className={classes.gridStyle2}>
            <FormControlLabel
              control={<Checkbox checked={rememberMe} onChange={handleChange} name="remember_me" />}
              label="Remember Me"
            />
            <Link component={RouterLink} to="/forgot-password">Forgot Password?</Link>
          </Grid>
          <Grid item xs={12} md={12}>
            <Button variant="contained" className={classes.btn2}
              disabled={
                state?.email?.length === 0 || state?.password?.length === 0
              }
              onClick={loginSubmit}
            >Login</Button>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography className={classes.text2}>Or login with</Typography>
          </Grid>
          <Grid item xs={12} md={12} className={classes.gridStyle3}>
            <Paper className={classes.iconContainer}>
              <img src={facebookIcon} className={classes.icon} />
            </Paper>
            <Box style={{ width: 10 }}></Box>
            <Paper className={classes.iconContainer}>
              <img src={googleIcon} className={classes.icon} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} className={classes.gridStyle3}>
            <Link component={RouterLink} to="/register">Create Account?</Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default LoginPage;