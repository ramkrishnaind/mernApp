import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router';
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
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import {useParams} from 'react-router';
import './property-detail.css';
import PageBanner from '../../components/page-banner';
import bannerImage from '../../images/property_header_2.jpeg';
import InfoCard from './components/info-card';
import FactAndFeature from './components/fact-and-feature';
import CarouselSlider from './components/property-carousel-slider';
import familyIcon from '../../images/icon-family.svg';
import yearIcon from '../../images/icon-year.svg';
import Aminities from './components/amenities';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarIcon from '@material-ui/icons/Star';
import APP_CONSTANTS from '../../constants/app-constants';
import {useDispatch, useSelector} from 'react-redux';
import * as PropertyAction from '../../redux/actions/PropertyAction';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import propertyDetail from '../property-detail';
import MapContainer from '../../components/section-map/MapContainer';
import BookNowModal from '../../components/book-now/book-now';


const useStyles = makeStyles((theme) => ({
  text1: {
    fontFamily: '"Open Sans",sans-serif',
    color: '#777777',
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
  },
  text3: {
    fontFamily: '"Open Sans",sans-serif',
    color: '#666666',
    fontSize: 14,
  },
  text4: {
    fontFamily: '"Open Sans",sans-serif',
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text5: {
    fontFamily: '"Open Sans",sans-serif',
    color: '#FF7601',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text6: {
    fontFamily: '"Open Sans",sans-serif',
    color: '#888888',
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 1.8,
  },
  text7: {
    fontFamily: '"Open Sans",sans-serif',
    color: '#333333',
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 10,
  },
  icon: {
    color: '#FF7601',
    fontSize: 20,
    paddingRight: 10,
  },
  style1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  btn1: {
    borderRadius: 8,
    color: '#FFFFFF',
    textTransform: 'none',
    fontFamily: '"Open Sans",sans-serif',
    backgroundColor: '#FF7601',
  },
  btn2: {
    borderRadius: 15,
    color: '#FFFFFF',
    textTransform: 'none',
    marginRight: 10,
    fontFamily: '"Open Sans",sans-serif',
  },
  style2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  style3: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  box1: {
    width: 10,
    paddingRight: 5,
    paddingLeft: 5,
    color: '#333333',
  },
}));

function handleNull(val) {
  return val || ' --';
}

const HouseDetailPage = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const {item} = props;
  const dispatch = useDispatch();
  let query = useQuery();
  const [viewDetails, setViewDetails] = React.useState(false);
  let token = query.get('token');
  const [PropertyDetail, setPropertyDetail] = React.useState({});
  const propertyListItem = useSelector((state) => state.PropertyDetail.data);
  const [bookNow, setBookNow] = useState(false);
  console.log("propertyListItem", propertyListItem);
  if (propertyListItem) {
    if (viewDetails === false) {
      console.log(propertyListItem);
      setViewDetails(true);
      setPropertyDetail(propertyListItem.data);
    }
  }
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  useEffect(() => {
    const isbookNowActive = localStorage.getItem("bookNow");
    console.log("isBookNow", typeof isbookNowActive, isbookNowActive);
    let userDetails = localStorage.getItem("user");
    if (isbookNowActive === "true" && userDetails) {
      setBookNow(true);
      console.log('setBookNow(true);', bookNow);
      localStorage.setItem("bookNow", false);
    }
  }, []);

  useEffect(() => {
    let reqData = {
      propertyId: location?.state || localStorage.getItem('pid'),
      // propertyId: "6125373540f10f2712e43db5"
    };
    console.log('GetPropertyDetailRequestAsync');
    dispatch(PropertyAction.GetPropertyDetailRequestAsync(reqData));
  }, []);


  const closeBookNow = () => {
    setBookNow(false);
  };

  console.log("property details *** ", PropertyDetail);
  return (
    <div style={{background: '#F7F7F7'}}>
      <PageBanner
        bgImage={bannerImage}
        title="Property"
        currentPage="PROPERTY DETAIL"
      />
      {/* <Gallery /> */}
      {viewDetails ? (
        <Container>
          <Paper elevation={1} style={{padding: 20, marginTop: 20}}>
            <Grid container>
              <Grid item xs={12} md={8} className={classes.style2}>
                <Typography className={classes.text7}>
                  {PropertyDetail.nameOfProject}
                </Typography>
                <Typography style={{
                  textTransform: 'capitalize', backgroundColor: "#00afb8", padding: "3px 7px", borderRadius: 5, fontSize: 10, color: "#fff"
                }}>FOR {PropertyDetail?.for}</Typography>
              </Grid>
              <Grid item xs={12} md={4} className={classes.style3}>
                <Typography className={classes.text3}>Starts From</Typography>
                <Box className={classes.box1}>/</Box>
                <Typography className={classes.text5}>{PropertyDetail?.price?.price}</Typography>
              </Grid>
            </Grid>
            <Grid container style={{marginTop: 10}}>
              <Grid item xs={12} md={8} className={classes.style2}>
                <LocationOnIcon
                  style={{
                    color: '#FF7601',
                    fontSize: 20,
                    padding: 0,
                    marginRight: 8,
                  }}
                />
                <Typography className={classes.text3}>
                  {PropertyDetail?.address?.latitude} {PropertyDetail?.address?.longitude}  {PropertyDetail?.address?.address} {PropertyDetail?.address?.city} {PropertyDetail?.address?.State} {PropertyDetail?.address?.pinCode}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} className={classes.style3}>
                {console.log(typeof PropertyDetail.rating)}
                <Rating name="half-rating-read" defaultValue={PropertyDetail?.rating} precision={0.5} value={propertyDetail?.rating} readOnly />
              </Grid>
              <Grid item xs={12} md={12} style={{marginTop: 20}}>
                <Button
                  variant="contained"
                  className={`${classes.btn2} btn-book-online`}
                  onClick={() => {
                    if (!localStorage.getItem('user')) {
                      localStorage.setItem('bookNow', true);
                      localStorage.setItem('pid', location?.state);
                      return props.history.push('/signin');
                    }
                    setBookNow(true);
                    console.log('book now clicked');
                  }}
                >
                  {APP_CONSTANTS.btnBookNowText}
                </Button>
              </Grid>
            </Grid>
          </Paper>
          <Paper elevation={1} style={{padding: 20, marginTop: 20}}>

            <Grid container>
              <Grid item xs={12} md={6} className={classes.style2} style={{backgroundImage: "#03b2cb", padding: 40}}>
                <img src="property_img3.jpeg" height={"100%"} width={'100%'} />
              </Grid>
              <Grid item xs={12} md={6} style={{padding: 20, marginTop: 20}}>
                <Typography className={classes.text7} style={{padding: 20}}> Property Brief</Typography>
                <Typography className={classes.text3} style={{padding: 20, lineHeight: "2.3em"}} >
                  {/* Vishal Construction Company is a Jaipur based construction company which today is a renowned name in providing best in class real estate services to its clients located all over India. Vishal Construction Company specializes in its area of work wherein they are expert in the real estate services, construction process of housing, commercial and other types of properties. They majorly serve clientele of Rajasthan, Hyderabad, Kolkata and other metro cities of India. Vishal Construction Company has a long-standing reputation wherein they deliver excellence catering to services and workmanship. They believe in providing quality projects with timely delivery. */}
                  {PropertyDetail?.projectDescription}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={8}
              style={{display: 'flex', flexDirection: 'column', marginBottom: 20}}
            >
              <CarouselSlider />
              <InfoCard item={{title: 'Facts and Features'}}>
                <Grid container>
                  <Grid item xs={12} md={3}>
                    <FactAndFeature
                      icon={'fa-bed'}
                      title="BEDROOMS"
                      value={PropertyDetail?.bedrooms}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <FactAndFeature
                      icon={'fa-bath'}
                      title="BATHROOMS"
                      value={PropertyDetail?.bathrooms}
                    />
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <FactAndFeature
                      icon={'fa-university'}
                      title="BALCONY"
                      value={PropertyDetail?.balconies}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <FactAndFeature
                      icon={'fa-check-circle'}
                      title="STATUS"
                      value={PropertyDetail?.possessionStatus}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <FactAndFeature
                      icon={'fa-gift'}
                      title="FURNISHING"
                      value={PropertyDetail?.furnishedStatus}
                    />

                  </Grid>
                  <Grid item xs={12} md={3}>
                    <FactAndFeature
                      icon={'fa-home'}
                      title="PROPERTY TYPE"
                      value={PropertyDetail?.pType}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <FactAndFeature
                      icon={'fa-calculator'}
                      title="TRANSACTION TYPE"
                      value={PropertyDetail?.transactionType}
                    />
                  </Grid>


                  <Grid item xs={12} md={3}>
                    <FactAndFeature
                      icon={'fa-bars'}
                      title="TOTAL FLOOR"
                      value={`${PropertyDetail?.floorNo}/${PropertyDetail?.totalFloors}`}
                    />
                  </Grid>

                </Grid>
              </InfoCard>
              <InfoCard item={{title: 'Property Details'}}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    style={{display: 'flex', flexDirection: 'column'}}
                  >
                    <Typography className={classes.text1}>
                      Property Code : {PropertyDetail?._id}
                    </Typography>
                    <Typography className={classes.text1}>
                      Property Price : {PropertyDetail?.price?.price}
                    </Typography>

                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    style={{display: 'flex', flexDirection: 'column'}}
                  >
                    <Typography className={classes.text1}>Guard Room: {PropertyDetail?.gaurdRoom == true ? 'Yes' : 'No'}</Typography>
                    <Typography className={classes.text1}>
                      Garages: 1
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    style={{display: 'flex', flexDirection: 'column'}}
                  >
                    <Typography className={classes.text1}>
                      Property status : For {PropertyDetail?.for}
                    </Typography>
                  </Grid>
                </Grid>
              </InfoCard>

              <InfoCard item={{title: 'Amenities'}}>
                <Grid container>
                  {
                    Object.keys(PropertyDetail?.amenities || []).map(amenities => {
                      return <Grid item xs={12} md={4}>
                        <Aminities icon={''} title={amenities[0].toUpperCase() + amenities.slice(1)} />
                      </Grid>;
                    })
                  }
                  {/* {PropertyDetail?.amenities?.basketballcourt ? (
                    <Grid item xs={12} md={4}>
                      <Aminities icon={familyIcon} title="Basketball Court" />
                    </Grid>
                  ) : null}
                  {PropertyDetail?.amenities?.airConditioned ? (
                    <Grid item xs={12} md={4}>
                      <Aminities icon={yearIcon} title="Air Conditioned" />
                    </Grid>
                  ) : null}
                  {PropertyDetail?.amenities?.swimmingPool ? (
                    <Grid item xs={12} md={4}>
                      <Aminities icon={familyIcon} title="Swimming Pool" />
                    </Grid>
                  ) : null}
                  {PropertyDetail?.amenities?.noSmokingZone ? (
                    <Grid item xs={12} md={4}>
                      <Aminities icon={yearIcon} title="No Smoking Zone" />
                    </Grid>
                  ) : null}
                  {PropertyDetail?.amenities?.gym ? (
                    <Grid item xs={12} md={4}>
                      <Aminities icon={familyIcon} title="Gym" />
                    </Grid>
                  ) : null}
                  {PropertyDetail?.amenities?.petFriendly ? (
                    <Grid item xs={12} md={4}>
                      <Aminities icon={yearIcon} title="Pet Friendly" />
                    </Grid>
                  ) : null}
                  {PropertyDetail?.amenities?.freeParkingOnPremises ? (
                    <Grid item xs={12} md={4}>
                      <Aminities
                        icon={familyIcon}
                        title="Free Parking on premises"
                      />
                    </Grid>
                  ) : null}
                  {PropertyDetail?.amenities?.wheelchairFriendly ? (
                    <Grid item xs={12} md={4}>
                      <Aminities icon={yearIcon} title="Wheelchair Friendly" />
                    </Grid>
                  ) : null}
                  {PropertyDetail?.amenities?.homeTheater ? (
                    <Grid item xs={12} md={4}>
                      <Aminities icon={yearIcon} title="Home Theater" />
                    </Grid>
                  ) : null} */}
                </Grid>
              </InfoCard>
              <InfoCard item={{title: 'Price Details'}}>
                <Grid container>
                  {
                    Object.keys(PropertyDetail?.price || []).map(priceInfo => {
                      return <Grid item xs={12} md={4}>
                        <Grid container style={{marginTop: 10, marginBottom: 10}}>
                          <Grid item xs={12} md={12} className={classes.style2}>
                            <Typography className={classes.text1}>{priceInfo} : {handleNull(PropertyDetail?.price[priceInfo])}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>;
                    })
                  }

                </Grid>
              </InfoCard>
              <InfoCard
                style={{marginBottom: 20}}
                item={{title: 'Reviews'}}
                reviewCount={
                  PropertyDetail?.review?.length != 0
                    ? PropertyDetail?.review?.length
                    : '0'
                }
              >
                Reviews
              </InfoCard>






            </Grid>


            <Grid item xs={12} md={4}>
              <Grid container>
                <Grid item item xs={12} md={12} style={{marginTop: 20}}>
                  <Paper style={{padding: 20}}>
                    <Grid container>
                      <Grid item xs={12} md={6} className={classes.style1}>
                        <Typography className={classes.text4}>
                          Location
                        </Typography>
                        <Typography className={classes.text1}>
                          Address :
                        </Typography>
                        <Typography className={classes.text1}>
                          State/county :
                        </Typography>
                        {/* <Typography className={classes.text1}>
                          Neighborhood
                        </Typography> */}
                        <Typography className={classes.text1}>
                          Zip/Postal Code :
                        </Typography>
                        {/* <Typography className={classes.text1}>
                          Country
                        </Typography> */}
                        <Typography className={classes.text1}>
                          City :
                        </Typography>

                      </Grid>

                      <Grid item xs={12} md={6} className={classes.style1}>
                        <Typography className={classes.text4}>
                          <Button variant="contained" className={classes.btn1}>
                            <a target="_blank" style={{color: "#fff", textDecoration: 'none'}} href={`https://www.google.com/maps/search/?api=1&query=${PropertyDetail?.address?.latitude},${PropertyDetail?.address?.longitude}`} class="location-map">View Map <i class="far fa-map-marker-alt"></i></a>
                          </Button>

                        </Typography>
                        <Typography className={classes.text1}>
                          {handleNull(PropertyDetail?.address?.address)}
                        </Typography>
                        <Typography className={classes.text1}>
                          {handleNull(PropertyDetail?.address?.State)}
                        </Typography>
                        {/* <Typography className={classes.text1}>
                          Andersonville
                        </Typography> */}
                        <Typography className={classes.text1}>
                          {handleNull(PropertyDetail?.address?.pinCode)}
                        </Typography>
                        {/* <Typography className={classes.text1}>
                          United States
                        </Typography> */}
                        <Typography className={classes.text1}>
                          {handleNull(PropertyDetail?.address?.city)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                {/* <Grid item item xs={12} md={12} style={{marginTop: 20}}>
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
                </Grid> */}
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{marginTop: 20, marginBottom: 20}}
                >
                  <Paper style={{padding: 20}}>
                    <Grid container>
                      <Grid item xs={12} md={12} className={classes.style1}>
                        <Typography className={classes.text4}>
                          Request A Call Back
                        </Typography>
                        <TextField
                          label="Your Name"
                          fullWidth
                          variant="outlined"
                          style={{marginBottom: 15}}
                        ></TextField>
                        <TextField
                          label="Email"
                          fullWidth
                          variant="outlined"
                          style={{marginBottom: 15}}
                        ></TextField>
                        <TextField
                          label="Phone"
                          fullWidth
                          variant="outlined"
                          style={{marginBottom: 15}}
                        ></TextField>
                        <TextField
                          label="Message"
                          multiline
                          fullWidth
                          variant="outlined"
                          style={{marginBottom: 15}}
                        ></TextField>
                        <Typography className={classes.text1}>
                          Request a Site Visit
                        </Typography>
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          row
                          value="yes"
                          onChange={() => { }}
                        >
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="No"
                          />
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

          <Grid container style={{paddingTop: 60, paddingBottom: 60}} >
            <Grid item xs={8} md={8} >
              <Paper elevation={1} style={{padding: 20, marginTop: 20}}>
                <Grid item xs={12} md={8} className={classes.style2}>
                  <LocationOnIcon
                    style={{
                      color: '#FF7601',
                      fontSize: 20,
                      padding: 0,
                      marginRight: 8,
                    }}
                  />
                  <Typography className={classes.text3}>
                    {PropertyDetail?.address?.latitude} {PropertyDetail?.address?.longitude}  {PropertyDetail?.address?.address} {PropertyDetail?.address?.city} {PropertyDetail?.address?.State} {PropertyDetail?.address?.pinCode}
                  </Typography>
                </Grid>
              </Paper >
            </Grid>

            <Grid item xs={8} md={8} className="map-container" style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', overflow: 'hidden'}}>

              <MapContainer markers={[{lat: PropertyDetail?.address?.latitude, lng: PropertyDetail?.address?.longitude}]} />

            </Grid>
          </Grid>
        </Container >
      ) : null}
      <BookNowModal open={bookNow} closeBookNow={closeBookNow} />
    </div >
  );
};

export default withRouter(HouseDetailPage);

