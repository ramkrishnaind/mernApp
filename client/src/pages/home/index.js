import React, { useEffect, useState } from "react";
import { Typography, Grid, Container, makeStyles, Button, Box } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import * as LoginAction from '../../redux/actions/LoginAction';
import { withRouter } from 'react-router-dom';
import Header from '../../components/header';
import SectionHeader from "../../components/section-header";
import SectionMap from "../../components/section-map";
import PropertyViewCard from "../../components/property-view-card";
import OwlCarouselSlider from "../../components/carousel-slider";
// import AboutUsOwlCarouselSlider from "../../components/about/index";
import DescriptionIcon from '@material-ui/icons/Description';
import ApartmentIcon from '@material-ui/icons/Apartment';
import './home.css';
import APP_CONSTANTS from "../../constants/app-constants";
import OuterCarouselSlider from "../../components/outer-carousel-slider";
import feedbacks from '../../utils/feedbacks.json';
import SectionTabs from "../../components/section-tabs";
import SectionClient from "../../components/section-client";
import ServiceCard from "../../components/service-card";
import SectionFeedback from "../../components/section-feedback";
import Footer from "../../components/footer";
import OnlineBooking from "../../components/online-form/online-form";
import EmiCalculater from "../../components/emiCalculater/emiCalculater";
import EnquryForm from "../../components/enquryForm/enquryForm";
import CountUp, { useCountUp } from 'react-countup';
import { statsInfo, aboutSectionInfo, servicesInfo, clientLookingforInfo, bannersInfo } from './intial-content';
import ApiClient from '../../api-client/index'
import VisibilitySensor from "react-visibility-sensor";

const useStyles = makeStyles((theme) => ({
  text1: {
    fontFamily: '"Open Sans",sans-serif',
    color: '#06AEB8',
    fontWeight: 400,
    fontSize: 16
  },
  text2: {
    fontFamily: '"Open Sans",sans-serif',
    color: '#FF7601',
    fontWeight: 400,
    fontSize: 36,
    marginBottom: 30
  },
  text3: {
    fontFamily: '"Open Sans",sans-serif',
    color: '#666666',
    fontSize: 14,
    marginBottom: 20,
  },
  text4: {
    fontFamily: '"Open Sans",sans-serif',
    color: '#FECE10',
    fontSize: 51,
    marginTop: 20,
    fontWeight: 'bold',
  },
  text5: {
    fontFamily: '"Open Sans",sans-serif',
    color: '#FFFFFF',
    fontSize: 19,
    // marginTop: 20,
    fontWeight: 400,
  },
  btnReadMore: {
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    width: 150,
    borderColor: '#EF8821',
    color: '#EF8821',
    textTransform: 'none',
    fontFamily: 'Open Sans,sans-serif'
  },
  box: {
    width: 70,
    height: 70,
    backgroundColor: '#06AEB8',
    borderRadius: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  blob: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: "260px", width: "260px",
    borderRadius: '50%',
    position: "relative",
    textAlign: "center",
    padding: "40px"
  }
}));

const HomePage = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [stats] = useState(statsInfo);
  const [aboutSection] = useState(aboutSectionInfo);
  const [services] = useState(servicesInfo);
  const [banners] = useState(bannersInfo);
  const [propertyData, setPropertyData] = useState({});
  useEffect(() => {
    dispatch(LoginAction.LoginRequestAsync({}));
  });

  useEffect(() => {
    const cookie = 'connect.sid=s%3AOTR7JRcRLkCbykuoWLRX4yOvqEZu20Is.4utrypcpaXicNe3A0foHiWeVNP8fQDryd6%2FdCibio%2BI'
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.VmlrcmFtSmVldFNpbmdoSkk.MaACpq-fK6F02rVz3vEAUgAYvTqDAEVKpq9zNbmWCPs'
    console.log("hello Hi")
    const getData = async () => {
      const response = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, '/property/getAllPropertyForHome', {}, {}, { Cookie: cookie, Authorization: authorization }, false)
      setPropertyData(response.data)
      console.log("response data", response.data)
    }
    getData()


  }, [])

  const showPropertyData = () => {
    if (propertyData !== {}) {
      console.log("propertyData!={}", propertyData)
      return <SectionTabs propertyData={propertyData} />
    } else {
      return null
    }
  }

  const Counter = (upto) => (
    <VisibilitySensor >
      {({ isVisible }) => {
        if (isVisible) {
          return <CountUp start={0} end={upto} startOnMount={false} duration={4}></CountUp>
        }
        else return <span>{upto}</span>
      }}
    </VisibilitySensor>
  );

  return (
    <div className="main-w3">
      <OwlCarouselSlider images={banners} style={{ width: '100%' }} />
      {/* <EmiCalculater />
      <EnquryForm/> */}
      <Box style={{ backgroundColor: '#FFFFFF' }}>
        <Container>
          <Grid container style={{ paddingTop: 60, paddingBottom: 60 }}>
            <Grid item xs={12} md={6}>
              {/* <img src={aboutSection.images[0].imageUrl} alt="" style={{height: 490}} /> */}
              <OwlCarouselSlider images={aboutSection.images} style={{ height: 490, width: 'auto' }} />
            </Grid>
            <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 20, paddingRight: 40 }} className="animate__animated animate__backInRight">
              <Typography className={classes.text1}><b>ABOUT VISHAL CONSTRUCTION COMPANY</b></Typography>
              <Typography className={classes.text2}>{aboutSection.title}</Typography>
              <Typography className={classes.text3}>
                {aboutSection.length > 0 || aboutSection.description[0]}
              </Typography>
              <Typography className={classes.text3}>
                {aboutSection.length > 1 || aboutSection.description[1]}
              </Typography>
              <Button variant="outlined" className={`${classes.btnReadMore} btn-readmore`}>
                READ MORE
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Grid container>
          <Grid item xs={12} md={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box className={classes.box}>
              <DescriptionIcon style={{ color: '#FFFFFF', fontSize: 40 }} />
            </Box>
            <Typography className={classes.text4}>{Counter(stats.years)}+ YEARS</Typography>
            <Typography className={classes.text5}>OF REDEFINING</Typography>

          </Grid>
          <Grid item xs={12} md={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box className={classes.box}>
              <DescriptionIcon style={{ color: '#FFFFFF', fontSize: 40 }} />
            </Box>
            <Typography className={classes.text4}>{Counter(stats.projects)}+</Typography>
            <Typography className={classes.text5}>PROJECTS</Typography>

          </Grid>
          <Grid item xs={12} md={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box className={classes.box}>
              <ApartmentIcon style={{ color: '#FFFFFF', fontSize: 40 }} />
            </Box>
            <Typography className={classes.text4}>{Counter(stats.happyClients)}+ </Typography>
            <Typography className={classes.text5}>Happy Clients</Typography>

          </Grid>
          <Grid item xs={12} md={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Box className={[classes.box, classes.blob]} >
              <Typography className={classes.text5}>RAJASTHAN <b>LARGEST</b> <br /> <b>&amp;MOST AWARDED</b> REAL STATE COMPANY</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container >

      <Box style={{ backgroundColor: '#FFFFFF', paddingTop: 50 }}>
        <Container>
          {/* ****** SECTION - SELL  ********* */}
          <SectionHeader title={APP_CONSTANTS.section2_title} subtitle={''} />
          {
            showPropertyData()
          }

        </Container>
      </Box>;

      {/* SECTION - CLIENT*/}
      <div className="client-bg">
        <Container style={{ paddingTop: 40, paddingBottom: 40 }}>
          <SectionClient clientLookingforInfo={clientLookingforInfo} />
        </Container>
      </div>

      <div style={{ backgroundColor: '#FFFFFF', paddingTop: 60, paddingBottom: 60 }}>
        <Container>
          <SectionHeader title={APP_CONSTANTS.section_services_title} subtitle={APP_CONSTANTS.section_services_subtitle} />
          <Grid container spacing={3} style={{ marginTop: 30 }}>
            {
              (services || []).map((service) => {
                return <Grid item xs={12} md={3}>
                  <ServiceCard service={service} />
                </Grid>;
              })
            }
          </Grid>
        </Container>
      </div>;

      {/* SECTION - FEEDBACK*/}
      <div className="client-bg">
        <Container style={{ paddingTop: 60, paddingBottom: 60 }}>
          <SectionFeedback items={feedbacks} />
        </Container>
      </div>;

      {/* TODO: SECTION - BUILDING MATERIAL*/}
      <div style={{ backgroundColor: '#FFFFFF', paddingTop: 60, paddingBottom: 60 }}>
        <Container>
          <SectionHeader title={APP_CONSTANTS.section_services_title} subtitle={APP_CONSTANTS.section_services_subtitle} />
        </Container>
      </div>;
      {/* TODO: SECTION - MAP */}
    </div >
  );
};

export default withRouter(HomePage);
