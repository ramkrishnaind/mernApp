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
  Button
} from "@material-ui/core";
import "./property-detail.css";
import PageBanner from "../../components/page-banner";
import bannerImage from "../../images/property_header_2.jpeg";
import InfoCard from "./components/info-card";
import FactAndFeature from "./components/fact-and-feature";
import familyIcon from "../../images/icon-family.svg";
import yearIcon from "../../images/icon-year.svg";
import Aminities from "./components/amenities";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StarIcon from "@material-ui/icons/Star";
import APP_CONSTANTS from "../../constants/app-constants";

const useStyles = makeStyles((theme) => ({
  text1: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#777777",
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10
  },
  text3: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#666666",
    fontSize: 14,
  },
  text4: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#333333",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  text5: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FF7601",
    fontSize: 20,
    fontWeight: "bold",
  },
  text6: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#888888",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 1.8
  },
  text7: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#333333",
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 10
  },
  icon: {
    color: "#FF7601",
    fontSize: 20,
    paddingRight: 10,
  },
  style1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  btn1: {
    borderRadius: 8, 
    color: '#FFFFFF', 
    textTransform: 'none', 
    fontFamily: '"Open Sans",sans-serif',
    backgroundColor: '#FF7601'
},
btn2: {
    borderRadius: 15, 
    color: '#FFFFFF', 
    textTransform: 'none', 
    marginRight: 10, 
    fontFamily: '"Open Sans",sans-serif'
},
style2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
},
style3: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
},
box1: {
    width: 10,
    paddingRight: 5,
    paddingLeft: 5,
    color: "#333333",
}
}));

const PropertyDetailPage = (props) => {
  const classes = useStyles();
  const { item } = props;

  return (
    <div style={{background: '#F7F7F7'}}>
      <PageBanner
        bgImage={bannerImage}
        title="Property"
        currentPage="PROPERTY DETAIL"
      />
      <Container>
        <Paper elevation={1} style={{ padding: 20, marginTop: 20 }}>
          <Grid container>
            <Grid item xs={12} md={8} className={classes.style2} >
              <Typography className={classes.text7}>Semi Detached 5 Bedroom house for sale</Typography>
              <Typography>FOR SALE</Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.style3}>
              <Typography className={classes.text3}>Starts From</Typography>
              <Box className={classes.box1} >/</Box>
              <Typography className={classes.text5}>Rs. 3250000</Typography>
            </Grid>
          </Grid>
          <Grid container style={{marginTop: 10}}>
            <Grid item xs={12} md={8} className={classes.style2} >
                <LocationOnIcon style={{ color: "#FF7601", fontSize: 20, padding: 0, marginRight: 8, }} />
                <Typography className={classes.text3}>310,311 Pinkcity Enclave, Jagatpura</Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.style3}>
                <StarIcon className={classes.icon} />
                <StarIcon className={classes.icon} />
                <StarIcon className={classes.icon} />
                <StarIcon className={classes.icon} />
                <StarIcon className={classes.icon} />
            </Grid>
            <Grid item xs={12} md={12} style={{marginTop: 20}}>
                <Button variant="contained" className={`${classes.btn2} btn-book-online`}>
                    {APP_CONSTANTS.btnBookNowText}
                </Button>
            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} style={{display: 'flex', flexDirection: 'column'}}>
              <InfoCard item={{title: 'Facts and Features'}}>
                  <Grid container>
                      <Grid item xs={12} md={3}>
                        <FactAndFeature icon={familyIcon} title="TYPE" value="Single Family" />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FactAndFeature icon={yearIcon} title="YEAR BUILT" value="2021" />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FactAndFeature icon={familyIcon} title="HEATING" value="Radiant" />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FactAndFeature icon={yearIcon} title="SQFT" value="979.0" />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FactAndFeature icon={familyIcon} title="BEDROOMS" value="3" />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FactAndFeature icon={yearIcon} title="BATHROOMS" value="2" />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FactAndFeature icon={familyIcon} title="GARAGE" value="1" />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FactAndFeature icon={yearIcon} title="STATUS" value="Active" />
                      </Grid>
                  </Grid>
              </InfoCard>
              <InfoCard item={{title: 'Property Details'}}>
                  <Grid container>
                      <Grid item xs={12} md={4} style={{display: 'flex', flexDirection: 'column'}}>
                        <Typography className={classes.text1}>Property ID : ZOAC25</Typography>
                        <Typography className={classes.text1}>Property Price : $5300/month</Typography>
                        <Typography className={classes.text1}>Property Type : Apartment</Typography>
                      </Grid>
                      <Grid item xs={12} md={4} style={{display: 'flex', flexDirection: 'column'}}>
                        <Typography className={classes.text1}>Bath: 3</Typography>
                        <Typography className={classes.text1}>Rooms : 6</Typography>
                        <Typography className={classes.text1}>Garages: 1</Typography>
                      </Grid>
                      <Grid item xs={12} md={4} style={{display: 'flex', flexDirection: 'column'}}>
                        <Typography className={classes.text1}>Property status : For rent</Typography>
                        <Typography className={classes.text1}>Bedrooms: 4</Typography>
                      </Grid>
                  </Grid>
              </InfoCard>
              <InfoCard item={{title: 'Amenities'}}>
                <Grid container>
                      <Grid item xs={12} md={4}>
                        <Aminities icon={familyIcon} title="Basketball Court" />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Aminities icon={yearIcon} title="Air Conditioned" />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Aminities icon={familyIcon} title="Swimming Pool" />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Aminities icon={yearIcon} title="No Smoking Zone" />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Aminities icon={familyIcon} title="Gym" />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Aminities icon={yearIcon} title="Pet Friendly" />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Aminities icon={familyIcon} title="Free Parking on premises" />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Aminities icon={yearIcon} title="Wheelchair Friendly" />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Aminities icon={yearIcon} title="Home Theater" />
                      </Grid>
                  </Grid>
              </InfoCard>
              <InfoCard item={{title: 'Reviews'}} reviewCount={2}>
                  Reviews goes here
              </InfoCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container>
                <Grid item item xs={12} md={12} style={{marginTop: 20}}>
                    <Paper style={{padding: 20}}>
                        <Grid container>
                            <Grid item xs={12} md={12} className={classes.style1}>
                                <Typography className={classes.text4}>Property Brief</Typography>
                                <Typography className={classes.text6}>
                                    Vishal Construction Company is a Jaipur based construction
                                    company which today is a renowned name in providing best in
                                    class real estate services to its clients located all over
                                    India. Vishal Construction Company specializes in its area
                                    of work wherein they are expert in the real estate services,
                                    construction process of housing, commercial and other types
                                    of properties. They majorly serve clientele of Rajasthan,
                                    Hyderabad, Kolkata and other metro cities of India. Vishal
                                    Construction Company has a long-standing reputation wherein
                                    they deliver excellence catering to services and
                                    workmanship. They believe in providing quality projects with
                                    timely delivery.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item item xs={12} md={12} style={{marginTop: 20}}>
                    <Paper style={{padding: 20}}>
                        <Grid container>
                            <Grid item xs={12} md={12} className={classes.style1}>
                                <Typography className={classes.text4}>Property Brief</Typography>
                                <Typography className={classes.text6}>
                                    Vishal Construction Company is a Jaipur based construction
                                    company which today is a renowned name in providing best in
                                    class real estate services to its clients located all over
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} style={{marginTop: 20, marginBottom: 20}}>
                    <Paper style={{padding: 20}}>
                        <Grid container>
                            <Grid item xs={12} md={12} className={classes.style1}>
                                <Typography className={classes.text4}>Request A Call Back</Typography>
                                <TextField label="Your Name" fullWidth variant="outlined" style={{marginBottom: 15}}></TextField>
                                <TextField label="Email" fullWidth variant="outlined" style={{marginBottom: 15}}></TextField>
                                <TextField label="Phone" fullWidth variant="outlined" style={{marginBottom: 15}}></TextField>
                                <TextField label="Message" multiline fullWidth variant="outlined" style={{marginBottom: 15}}></TextField>
                                <Typography className={classes.text1}>Request a Site Visit</Typography>
                                <RadioGroup aria-label="gender" name="gender1" row value="yes" onChange={() => {}}>
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                                <Button variant="contained" className={classes.btn1}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PropertyDetailPage;