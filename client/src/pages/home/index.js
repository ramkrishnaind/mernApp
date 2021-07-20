import React, {useEffect} from "react";
import { Typography, Grid, Container, makeStyles, Button, Box } from "@material-ui/core";
import {useDispatch} from 'react-redux';
import * as LoginAction from '../../redux/actions/LoginAction';
import {withRouter} from 'react-router-dom';
import Header from '../../components/header';
import SectionHeader from "../../components/section-header";
import PropertyViewCard from "../../components/property-view-card";
import OwlCarouselSlider from "../../components/carousel-slider";
import DescriptionIcon from '@material-ui/icons/Description';
import ApartmentIcon from '@material-ui/icons/Apartment';
import './home.css';
import APP_CONSTANTS from "../../constants/app-constants";
import OuterCarouselSlider from "../../components/outer-carousel-slider";
import propertieslist from '../../utils/properties-list.json';
import feedbacks from '../../utils/feedbacks.json';
import SectionTabs from "../../components/section-tabs";
import SectionClient from "../../components/section-client";
import ServiceCard from "../../components/service-card";
import SectionFeedback from "../../components/section-feedback";
import Footer
 from "../../components/footer";
import OnlineBooking from "../../components/online-form/online-form";
const useStyles = makeStyles((theme)=> ({
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
    fontSize: 36
  },
  text3: {
    fontFamily: '"Open Sans",sans-serif',
    color: '#666666',
    fontSize: 14,
    marginTop: 20
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
  }
}));

const HomePage = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(()=> {
    dispatch(LoginAction.LoginRequestAsync({}));
  });

  return (
    <div className="main-w3">
      <Header />
      <OwlCarouselSlider />
      {/* online-booking */}
      <OnlineBooking/>
      <Box style={{backgroundColor: '#FFFFFF'}}>
      <Container>
        <Grid container style={{paddingTop: 50, paddingBottom: 50}}>
          <Grid item xs={12} md={6}>
            <img src={process.env.PUBLIC_URL + '/images/about_img.png'} style={{width: 350, height: 350}} />
          </Grid>
          <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}} className="animate__animated animate__backInRight">
            <Typography className={classes.text1}>ABOUT VISHAL CONSTRUCTION COMPANY</Typography>
            <Typography className={classes.text2}>WE'VE BEEN CREATING <br/>AWESOME SINCE 1994</Typography>
            <Typography className={classes.text3}>
              At Vishal Construction Company, we always think ahead but our focus remains unerringly on delighting our 
              customers and stakeholders. Functioning through an array of best-of-class practices and utilizing leading 
              technologies, we at Vishal Construction Company believe either in staying ahead of the wave or riding it.
            </Typography>
            <Typography className={classes.text3}>
              If you are looking at blank cassettes on the web lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incididunt.
            </Typography>
            <Button variant="outlined" className={`${classes.btnReadMore} btn-readmore`}>
              READ MORE
            </Button>
          </Grid>
        </Grid>
      </Container>
      </Box>
        <Container style={{paddingTop: 50, paddingBottom: 50}}>
          <Grid container>
            <Grid item xs={12} md={3} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Box className={classes.box}>
                <DescriptionIcon style={{color: '#FFFFFF', fontSize: 40}}/>
              </Box>
              <Typography className={classes.text4}>20 YEARS</Typography>
              <Typography className={classes.text5}>OF REDEFINING</Typography>
          </Grid>
          <Grid item xs={12} md={3} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box className={classes.box}>
              <DescriptionIcon style={{color: '#FFFFFF', fontSize: 40}}/>
            </Box>
            <Typography className={classes.text4}>43</Typography>
              <Typography className={classes.text5}>PROJECTS</Typography>
          </Grid>
          <Grid item xs={12} md={3} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Box className={classes.box}>
              <ApartmentIcon style={{color: '#FFFFFF', fontSize: 40}}/>
            </Box>
            <Typography className={classes.text4}>21 CITIES</Typography>
              <Typography className={classes.text5}>PRESENCE IN</Typography>
          </Grid>
          <Grid item xs={12} md={3} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
           
            <Typography className={classes.text4}>20</Typography>
            <Typography className={classes.text5}>OF REDEFINING</Typography>
          </Grid>
          </Grid>
        </Container>

        <Box style={{backgroundColor: '#FFFFFF', paddingTop: 50}}>
          <Container>
            {/******* SECTION - SELL  **********/}
            <SectionHeader title={APP_CONSTANTS.section2_title} subtitle={APP_CONSTANTS.section2_subtitle} />
            <SectionTabs tabItems={propertieslist} />
            {/******* SECTION - RENT  ***********/}
            <SectionHeader title={APP_CONSTANTS.section1_title} subtitle={APP_CONSTANTS.section1_subtitle} />
            <SectionTabs tabItems={propertieslist} />
            {/******* SECTION - CONSTRUCTION  **********/}
            <SectionHeader title={APP_CONSTANTS.section3_title} subtitle={APP_CONSTANTS.section3_subtitle} />
            <SectionTabs tabItems={propertieslist} />
            {/******* SECTION - INTERIOR  **********/}
            <SectionHeader title={APP_CONSTANTS.section4_title} subtitle={APP_CONSTANTS.section4_subtitle} />
            <SectionTabs tabItems={propertieslist} />

          </Container>
        </Box>

        {/* SECTION - CLIENT*/}
        <div className="client-bg">
          <Container style={{paddingTop: 40, paddingBottom: 40}}>
            <SectionClient />
          </Container>
        </div>
   
        <div style={{backgroundColor: '#FFFFFF', paddingTop: 60, paddingBottom: 60}}>
          <Container>
            <SectionHeader title={APP_CONSTANTS.section_services_title} subtitle={APP_CONSTANTS.section_services_subtitle} />
            <Grid container spacing={3} style={{marginTop: 30}}>
              <Grid item xs={12} md={3}>
                <ServiceCard />
              </Grid>
              <Grid item xs={12} md={3}>
                <ServiceCard />
              </Grid>
              <Grid item xs={12} md={3}>
                <ServiceCard />
              </Grid>
              <Grid item xs={12} md={3}>
                <ServiceCard />
              </Grid>
            </Grid>
          </Container>
        </div>
        
        {/* SECTION - FEEDBACK*/}
        <div className="client-bg">
          <Container style={{paddingTop: 60, paddingBottom: 60}}>
            <SectionFeedback items={feedbacks} />
          </Container>
        </div>

        {/* TODO: SECTION - BUILDING MATERIAL*/}
        <div style={{backgroundColor: '#FFFFFF', paddingTop: 60, paddingBottom: 60}}>
          <Container>
            <SectionHeader title={APP_CONSTANTS.section_services_title} subtitle={APP_CONSTANTS.section_services_subtitle} />
          </Container>
        </div>
        {/* TODO: SECTION - MAP */}

        {/* TODO: SECTION - FOOTER */}
        <div className="footer-section">
          <Container style={{paddingTop: 10, paddingBottom: 40}}>
            <Footer />
          </Container>
        </div>
    </div>
  );
};

export default withRouter(HomePage);
