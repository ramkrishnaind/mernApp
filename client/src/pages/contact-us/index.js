import React from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
  Paper,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import "./contact-us.css";
import PageBanner from "../../components/page-banner";
import bannerImage from "../../images/contact-us.jpeg";
import { withRouter } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
const useStyles = makeStyles((theme) => ({
  text1: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FF7660",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  text3: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#666666",
    fontSize: 14,
  },
  text4: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#333333",
    fontSize: 14,
    marginTop: 10,
    lineHeight: 2,
  },
  text5: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  style1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  btn1: {
    // borderRadius: 8,
    color: "#06AEB8",
    textTransform: "none",
    fontFamily: '"Open Sans",sans-serif',
    backgroundColor: "#FFFFFF",
    marginTop: 20
  },
  btn2: {
    borderRadius: 15,
    color: "#FFFFFF",
    textTransform: "none",
    marginRight: 10,
    fontFamily: '"Open Sans",sans-serif',
  },
  style2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  socialBox: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 5, 
    backgroundColor: '#06AEB8', 
    marginRight: 8,
    width: 26,
    height: 26,
    borderRadius: 25,
    cursor: 'pointer'
},
notchedOutline: {
    borderWidth: "1px",
    borderColor: "#FFFFFF !important",
  }
}));

const ContactUsPage = (props) => {
  const classes = useStyles();
  const { item } = props;

  return (
    <div style={{ background: "#F7F7F7" }}>
      <PageBanner
        bgImage={bannerImage}
        title="Contact Us"
        currentPage="CONTACT US"
      />
      <Container style={{paddingLeft: '10%', paddingRight: '10%', marginTop: 20, marginBottom: 20}}>
        <Paper style={{padding: 20}}>
          <Grid container spacing={1}>
              <Grid item xs={12} md={6} className={classes.style1}>
                  <Typography className={classes.text1}>Let's get in touch</Typography>
                  <Typography className={classes.text4}>Contact us with the following details. and fillup the form with the details.</Typography>
                  <Grid container>
                    <Grid item xs={12} md={12} className={classes.style2} >
                        <LocationOnIcon style={{ color: "#FF7601", fontSize: 25, padding: 0, marginRight: 8, }} />
                        <Typography className={classes.text3}>9-A, Brij Vatika, 7 No. Bus Stand, Mahal Road, Jagatpura, Jaipur - 302017 (Rajasthan)</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} md={12} className={classes.style2} >
                        <MailOutlineIcon style={{ color: "#FF7601", fontSize: 25, padding: 0, marginRight: 8, }} />
                        <Typography className={classes.text3}>info@vishalconstructioncompany.com</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} md={12} className={classes.style2} >
                        <PhoneIphoneIcon style={{ color: "#FF7601", fontSize: 25, padding: 0, marginRight: 8, }} />
                        <Typography className={classes.text3}>+91-9571647680</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} md={12} className={classes.style2} >
                        <AccessTimeIcon style={{ color: "#FF7601", fontSize: 25, padding: 0, marginRight: 8, }} />
                        <Typography className={classes.text3}>Mon - Sat, 08 AM - 06 PM</Typography>
                    </Grid>
                  </Grid>
                  <Typography className={classes.text4} style={{marginTop: 30}}>Connect with us :</Typography>
                  <Grid container>
                    <Grid item xs={12} md={12} className={classes.style2}>
                        <Box className={`${classes.socialBox} social_icon`}>
                            <FacebookIcon style={{color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                        </Box>
                        <Box className={`${classes.socialBox} social_icon`}>
                            <TwitterIcon style={{color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                        </Box>
                        <Box className={`${classes.socialBox} social_icon`}>
                            <InstagramIcon style={{color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                        </Box>
                        <Box className={`${classes.socialBox} social_icon`}>
                            <LinkedInIcon style={{color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                        </Box>
                    </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={12} md={6} className={classes.style1} style={{background: '#FF7601', padding: 20}}>
                <Typography className={classes.text5}>Contact Us</Typography>
                <TextField 
                    style={{marginTop: 15}}
                    variant="outlined" 
                    label="Name" 
                    fullWidth  
                    InputProps={{
                        classes: {
                        notchedOutline: classes.notchedOutline
                        }
                    }}
                    InputLabelProps={{
                        style: {color: '#FFFFFF'}
                    }}>
                </TextField>
                <TextField 
                    style={{marginTop: 15}}
                    variant="outlined" 
                    label="Email" 
                    fullWidth  
                    InputProps={{
                        classes: {
                        notchedOutline: classes.notchedOutline
                        }
                    }}
                    InputLabelProps={{
                        style: {color: '#FFFFFF'}
                    }}>
                </TextField>
                <TextField
                    style={{marginTop: 15}}
                    variant="outlined" 
                    label="Phone" 
                    fullWidth  
                    InputProps={{
                        classes: {
                        notchedOutline: classes.notchedOutline
                        }
                    }}
                    InputLabelProps={{
                        style: {color: '#FFFFFF'}
                    }}>
                </TextField>
                <TextField 
                    style={{marginTop: 15}}
                    variant="outlined" 
                    label="Message" 
                    fullWidth
                    multiline
                    InputProps={{
                        classes: {
                        notchedOutline: classes.notchedOutline
                        }
                    }}
                    InputLabelProps={{
                        style: {color: '#FFFFFF'}
                    }}>
                </TextField>
                <Button className={`${classes.btn1} send-btn`} variant="contained">Send</Button>
              </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default withRouter(ContactUsPage);
