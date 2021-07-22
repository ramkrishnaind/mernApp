import React from "react";
import {
  Grid,
  Typography,
  Box,
  makeStyles,
  Paper,
  Divider,
  Button,
  Card,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalHotelIcon from "@material-ui/icons/LocalHotel";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import BathtubIcon from "@material-ui/icons/Bathtub";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import StarIcon from "@material-ui/icons/Star";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const useStyles = makeStyles((theme) => ({
  text1: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FF7601",
    fontSize: 14,
    marginTop: 10,
  },
  text2: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#333333",
    fontSize: 18,
    fontWeight: "bold",
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
    fontWeight: "bold",
  },
  text5: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FF7601",
    fontSize: 20,
    fontWeight: 'bold'
  },
  features: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  icon: {
    color: "#FF7601",
    fontSize: 20,
    paddingRight: 10,
  },
  btn1: {
    borderRadius: 12, 
    color: '#FFFFFF', 
    textTransform: 'none', 
    fontFamily: '"Open Sans",sans-serif',
    backgroundColor: '#FF7601'
},
btn2: {
    borderRadius: 12, 
    color: '#666666', 
    textTransform: 'none', 
    fontFamily: '"Open Sans",sans-serif',
    backgroundColor: '#ECECEC'
}
}));

const PropertyListCard = (props) => {
  const {item} = props;
  
  const classes = useStyles();

  return (
    <Paper style={{ borderRadius: 0, padding: 0, marginTop: 30 }}>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <img
          className="image"
            src={process.env.PUBLIC_URL + "/property_img3.jpeg"}
            style={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              backgroundColor: "red",
            }}
          />
          {/* <span className="featured">FEATURED</span> */}
        </Grid>
        <Grid item xs={12} md={8} style={{ padding: 30 }}>
          <Grid container contaienr spacing={1}>
            <Grid
              item
              xs={12}
              md={8}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Typography className={classes.text2}>
                {item?.title}
              </Typography>
              <Grid>
                <Grid
                  item
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginTop: 10,
                  }}
                >
                  <LocationOnIcon
                    style={{
                      color: "#FF7601",
                      fontSize: 20,
                      padding: 0,
                      marginRight: 8,
                    }}
                  />
                  <Typography className={classes.text3}>
                    {item?.location}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6} md={6} className={classes.features}>
                  <ZoomOutMapIcon className={classes.icon} />
                  <Typography className={classes.text4}>356 Sq-Ft</Typography>
                </Grid>
                <Grid item xs={6} md={6} className={classes.features}>
                  <LocalHotelIcon className={classes.icon} />
                  <Typography className={classes.text4}>4 Bedrooms</Typography>
                </Grid>
                <Grid item xs={6} md={6} className={classes.features}>
                  <DriveEtaIcon className={classes.icon} />
                  <Typography className={classes.text4}>3 Garage</Typography>
                </Grid>
                <Grid item xs={6} md={6} className={classes.features}>
                  <BathtubIcon className={classes.icon} />
                  <Typography className={classes.text4}>3 Bathroom</Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid contaienr>
                <Grid
                  item
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography className={classes.text3}>Starts From</Typography>
                  <Box style={{ width: 10, paddingRight: 5, paddingLeft: 5, color: '#333333' }}>/</Box>
                  <Typography className={classes.text5}>Rs. 3250000</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} md={8}>
                  <Grid container>
                    <Grid xs={12} md={6}>
                      <Grid contaienr>
                        <Grid
                          item
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                        >
                          <EventAvailableIcon className={classes.icon} />
                          <Box style={{ width: 10 }}></Box>
                          <Typography className={classes.text3}>
                            1 day ago
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid xs={12} md={6}>
                      <Grid contaienr>
                        <Grid
                          item
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-end",
                          }}
                        >
                          <StarIcon className={classes.icon} />
                          <StarIcon className={classes.icon} />
                          <StarIcon className={classes.icon} />
                          <StarIcon className={classes.icon} />
                          <StarIcon className={classes.icon} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid contaienr>
                    <Grid
                      item
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button variant="contained" className={classes.btn1}>
                        View Detail
                      </Button>
                      <Box style={{ width: 10 }}></Box>
                      <Button variant="contained" className={classes.btn2}>
                        Take a tour
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PropertyListCard;
