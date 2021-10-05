import React, {useState} from 'react';
import {
  Grid,
  Typography,
  Box,
  makeStyles,
  Paper,
  Divider,
  Button,
  Card,
  Container, TextField, NativeSelect

} from "@material-ui/core";
import PropTypes from "prop-types";
import {Link as RouterLink} from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalHotelIcon from "@material-ui/icons/LocalHotel";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import BathtubIcon from "@material-ui/icons/Bathtub";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import StarIcon from "@material-ui/icons/Star";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

import {useDispatch, useSelector} from 'react-redux';
import '../header/header.css';
import APP_CONSTANTS from '../../constants/app-constants';
import Dialog from '@material-ui/core/Dialog';
import '../enquryForm/enquryForm.css';
import {withStyles} from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import * as SitevisitAction from '../../redux/actions/SitevisitAction';
import ApiClient from '../../api-client';
import '../../components/outer-carousel-slider/featured.css';

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



const stylessd = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#FFFFFF !important",
  },


  contact: {
    padding: 0,
    color: '#FFFFFF',
    marginRight: 10,
    fontFamily: '"Open Sans",sans-serif'
  },
  icon: {
    padding: 0,
    color: '#FFFFFF',
    marginRight: 10
  },
  menu: {
    padding: 0,
    color: '#000000',
    marginRight: 10,
    fontFamily: '"Open Sans",sans-serif',
    fontWeight: 400,
    cursor: 'pointer'
  },
  btn1: {
    borderRadius: 15,
    color: '#FFFFFF',
    textTransform: 'none',
    marginRight: 10,
    fontFamily: '"Open Sans",sans-serif'
  },
  btn2: {
    borderRadius: 15,
    background: '#FF7601',
    color: '#FFFFFF',
    textTransform: 'none',
    fontFamily: 'Open Sans,sans-serif'
  },
  btn3: {
    borderRadius: 15,
    background: '#ECECEC',
    marginRight: 10,
    color: '#000000',
    textTransform: 'none',
    fontFamily: '"Open Sans",sans-serif'
  },
  btn4: {
    borderRadius: 15,
    color: '#000000',
    textTransform: 'none',
    fontFamily: '"Open Sans",sans-serif'
  },
});

const DialogTitle = withStyles(stylessd)((props) => {
  const {children, classes, onClose, ...other} = props;


  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const PropertyListCard = (props) => {
  const {item} = props;
  console.log(item);

  const classes = useStyles();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();


  function handleNull(val) {
    return val || '_ _ ';
  }

  const handleData = (e) => {
    const formData = {
      name: name,
      email: email,
      phone: mobile,
      time: time,
      // type: type,
      // propertyname: propertyname,
    };
    console.log('formData', formData);
    dispatch(SitevisitAction.SitevisitRequestAsync(formData));
    // toast.success('Request Sent successfully', { position: toast.POSITION.TOP_RIGHT, autoClose: 5000 })
    setName('');
    setMobile('');
    setEmail('');
    setTime('');
    setOpen(false);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const mainImage = item?.images[0]?.mainImage[0]?.path ? ApiClient.SERVER_ADDRESS + "/" + item?.images[0]?.mainImage[0]?.path : "/no-image-available-icon-6.png";
  console.log("mainImage", mainImage, item?.images[0]);
  const address = item?.features[0]?.address || {};
  const propertTag = item?.propertTag;
  return (
    <>
      <Paper style={{borderRadius: 0, padding: 0, marginTop: 30}}>
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
            <div style={{position: 'relative'}}>
              {propertTag ? <span class="featured">{propertTag}</span> : null}
              <img
                className="image"
                src={mainImage}
                style={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  backgroundColor: "red",
                }}
                alt=""
              />
            </div>
            {/* <span className="featured">FEATURED</span> */}
          </Grid>
          <Grid item xs={12} md={8} style={{padding: 30}}>
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
                  {item?.nameOfProject}
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

                      {handleNull(address.latitude)}, {handleNull(address.longitude)} {handleNull(address.address)} {handleNull(address.city)} {handleNull(address.State)} {handleNull(address.pinCode)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6} md={6} className={classes.features}>
                    <ZoomOutMapIcon className={classes.icon} />
                    <Typography className={classes.text4}>{handleNull(item?.features[0]?.builtUpArea)} Sq-Ft</Typography>
                  </Grid>
                  <Grid item xs={6} md={6} className={classes.features}>
                    <LocalHotelIcon className={classes.icon} />
                    <Typography className={classes.text4}>{handleNull(item?.features[0]?.bedrooms)} Bedrooms</Typography>
                  </Grid>
                  <Grid item xs={6} md={6} className={classes.features}>
                    <DriveEtaIcon className={classes.icon} />
                    <Typography className={classes.text4}>{handleNull(item?.features[0]?.totalFloors)} TotalFloors</Typography>
                  </Grid>
                  <Grid item xs={6} md={6} className={classes.features}>
                    <BathtubIcon className={classes.icon} />
                    <Typography className={classes.text4}>{handleNull(item?.features[0]?.bathrooms)} Bathroom</Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Divider style={{marginTop: 20, marginBottom: 20}} />
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
                    <Box style={{width: 10, paddingRight: 5, paddingLeft: 5, color: '#333333'}}>/</Box>
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
                            <Box style={{width: 10}}></Box>
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
                        <Button variant="contained" className={classes.btn1} component={RouterLink} to={
                          {
                            pathname: '/home-detail',
                            state: item?._id
                          }}
                        >
                          View Detail
                        </Button>
                        <Box style={{width: 10}}></Box>
                        <Button variant="contained" className={classes.btn2}
                        // onClick={handleClickOpen}
                        >
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


      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className="EnquryFormData">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {APP_CONSTANTS.titleSiteVisit}
        </DialogTitle>
        <Box className="emiForm">
          <TextField
            className="EmiInputs"
            style={{marginTop: 15}}
            variant="outlined"
            label="Your Name"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            InputLabelProps={{
              style: {color: '#FFFFFF'}
            }}
            fullWidth >
          </TextField>
          <TextField
            className="EmiInputs"
            style={{marginTop: 15}}
            variant="outlined"
            label="Email Address"
            type="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            InputLabelProps={{
              style: {color: '#FFFFFF'}
            }}
            fullWidth >
          </TextField>
          <TextField
            className="EmiInputs"
            style={{marginTop: 15}}
            variant="outlined"
            label="Phone Number"
            name="Phone"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            InputLabelProps={{
              style: {color: '#FFFFFF'}
            }}
            fullWidth >
          </TextField>
          <NativeSelect className="EmiInputs selectInput"
            onChange={(e) => setTime(e.target.value)}
            fullWidth>
            <option value="">Choose Time</option>
            <option value="8:00 AM">8:00 AM</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 AM">12:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="7:00 PM">7:00 PM</option>
          </NativeSelect>
        </Box>
        <DialogActions>
          <Box className="ParentButton">
            <Button onClick={(e) => handleData(e)}>
              Submit
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PropertyListCard;
