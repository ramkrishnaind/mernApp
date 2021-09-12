import React, {useEffect, useState} from 'react';
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
  Paper,
} from '@material-ui/core';
import './about-us.css';
import PageBanner from '../../components/page-banner';
import InfoCard from './components/ourTeam';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import OurTeam from './components/ourTeam/index';
import ApiClient from '../../api-client';
import OwlCarouselSlider from '../../components/carousel-slider';

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
  text8: {
    fontFamily: '"Open Sans",sans-serif',
    color: '#fff',
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
    // backgroundColor: 'rgb(255, 118, 0)'
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

const AboutUsPage = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const {item} = props;
  const dispatch = useDispatch();
  let query = useQuery();
  const [viewDetails, setViewDetails] = useState(false);
  let token = query.get('token');
  const [aboutUsSection, setAboutUsSection] = useState({});
  const [team, setTeam] = useState([]);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  React.useEffect(() => {
    populateAboutUsDetails();
    populateTeamDetails();
  }, []);


  const populateAboutUsDetails = () => {
    const getData = async () => {
      const response = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, '/home/getHomeAbout', {}, {}, {Cookie: ApiClient.cookie, Authorization: ApiClient.authorization}, false);
      // setPropertyData(response.data);
      const aboutUsInfo = {};
      aboutUsInfo.header = response?.data?.header;
      aboutUsInfo.title = response?.data?.title;
      aboutUsInfo.description = response?.data?.description;
      let images = [];
      const baseUrl = ApiClient.SERVER_ADDRESS;
      response?.data?.aboutImages?.forEach((imageInfo) => {
        let imageUrl = baseUrl + "/" + imageInfo.path;
        const imageData = {imageUrl: imageUrl, desc: ""};
        images.push(imageData);
      });
      aboutUsInfo.images = images;
      setAboutUsSection(aboutUsInfo);
      // console.log('About us details', aboutUsInfo, aboutSection);
    };
    getData();
  };

  const populateTeamDetails = () => {
    const getData = async () => {
      const response = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, '/team/getClientTeamMember', {}, {}, {Cookie: ApiClient.cookie, Authorization: ApiClient.authorization}, false);
      // setPropertyData(response.data);

      setTeam(response.data.list);
      setViewDetails(true);
      // console.log('About us details', aboutUsInfo, aboutSection);
    };
    getData();
  };

  return (
    <div style={{background: '#F7F7F7'}}>
      <PageBanner
        bgImage={'/about_us.jpeg'}
        title="About Us"
        currentPage="ABOUT US"
      />
      {/* <Gallery /> */}
      {viewDetails ? (
        <Container>

          <Paper elevation={0} style={{padding: 20, marginTop: 20}}>

            <Grid container>
              <Grid item xs={12} md={6} className={classes.style2} >
                <OwlCarouselSlider images={aboutUsSection.images || []} autoplay={true} style={{height: 490, width: 'auto', maxWidth: "90%"}} />
                {/* {console.log(aboutUsSection)} */}
                {/* <img src={aboutUsSection.images[0].imageUrl || "about-img.jpeg"} height={"auto"} alt={''} style={{border: "20px solid #fff"}} width={'110%'} /> */}
              </Grid>
              <Grid item xs={12} md={6} style={{padding: 20, backgroundColor: "#ff7600", height: 'fit-content', margin: 'auto'}}>

                <Typography className={classes.text8} style={{padding: 20}}> {aboutUsSection.header}</Typography>
                <Typography className={classes.text4} style={{paddingLeft: 20, color: '#fff'}}> {aboutUsSection.title}</Typography>
                <Typography className={classes.text3} style={{padding: 20, lineHeight: "2.3em", color: '#fff'}} >
                  {aboutUsSection.description}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          {/* <Paper elevation={0} style={{padding: 20, marginTop: 20, marginBottom: 20}}>

            <Grid container style={{marginBottom: 20}}>
              <Grid item xs={12} md={6} style={{padding: 20, marginTop: 20}}>
                <Typography className={classes.text5} style={{paddingLeft: 20}} >Why Us</Typography>
                <Typography className={classes.text7} style={{padding: 20}}>
                  Why Are We Awesome?</Typography>
                <Typography className={classes.text3} style={{padding: 20, lineHeight: "2.3em"}} >
                  Vishal Construction Company is a Jaipur based construction company which today is a renowned name in providing best in class real estate services to its clients located all over India. Vishal Construction Company specializes in its area of work wherein they are expert in the real estate services, construction process of housing, commercial and other types of properties. They majorly serve clientele of Rajasthan, Hyderabad, Kolkata and other metro cities of India.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={classes.style2} style={{backgroundImage: "#03b2cb", padding: 40}}>
                <img src="Happy-Family.jpeg" height={"100%"} width={'100%'} />
              </Grid>

            </Grid>
          </Paper> */}
          <OurTeam team={team} />

        </Container>
      ) : null}
    </div>
  );
};

export default AboutUsPage;

