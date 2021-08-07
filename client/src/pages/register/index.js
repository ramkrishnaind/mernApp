import React from 'react';
import './register.css';
import {
  Grid, 
  Typography, 
  Paper, Card, 
  Box, makeStyles, 
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  Link} from '@material-ui/core';
import bannerImage from "../../images/banner-2.jpeg";
import FacebookIcon from '@material-ui/icons/Facebook';
import googleIcon from "../../images/icon-google.png";
import facebookIcon from "../../images/facebook.png";

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
    color: "#2C86FF",
    fontSize: 12,
    cursor: 'pointer'
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
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
  padding: 30, 
  paddingTop: 40, 
  paddingBottom: 40, 
  borderRadius: 10
}
}));

const RegisterPage = props => {
  const classes = useStyles();
  const [termsOfUsePrivacyPolicy, setTermsOfUsePrivacyPolicy] = React.useState(false);

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
        <Grid container spacing={1}>
          <Grid item sm={12} md={12} className={classes.login}>
              <Typography className={classes.text1}>Register</Typography>
              <TextField
                className={classes.textField} 
                placeholder="Username" 
                variant="outlined" 
                fullWidth
                InputProps={{
                  classes: {
                  notchedOutline: classes.notchedOutline
                  }
                }}
              />
              <Box style={{ height: 20 }} />
              <TextField
                className={classes.textField} 
                placeholder="Email" 
                variant="outlined" 
                fullWidth
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
                fullWidth
                InputProps={{
                  classes: {
                  notchedOutline: classes.notchedOutline
                  }
                }}
              />
              <Box style={{ height: 20 }} />
              <TextField 
                className={classes.textField} 
                placeholder="Confirm Password" 
                variant="outlined" 
                fullWidth
                InputProps={{
                  classes: {
                  notchedOutline: classes.notchedOutline
                  }
                }}
              />
          </Grid>
          <Grid item xs={12} md={12}>
            <Checkbox checked={termsOfUsePrivacyPolicy} onChange={handleChange} name="terms_n_conditions" />
            I accept the <Link className={classes.text3}>Terms of Use</Link> & <Link className={classes.text3}>Privacy Policy</Link>
          </Grid>
          <Grid item xs={12} md={12}>
            <Button variant="contained" className={classes.btn2} >Register</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default RegisterPage;