import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import OurTeam from './components/ourTeam/index';
import ApiClient from '../../api-client';
import OwlCarouselSlider from '../../components/carousel-slider';

const useStyles = makeStyles((theme) => ({

}));

const AboutUsPage = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const { item } = props;
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
      const response = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, '/home/getHomeAbout', {}, {}, { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization }, false);
      // setPropertyData(response.data);
      const aboutUsInfo = {};
      aboutUsInfo.header = response?.data?.header;
      aboutUsInfo.title = response?.data?.title;
      aboutUsInfo.description = response?.data?.description;
      let images = [];
      const baseUrl = ApiClient.SERVER_ADDRESS;
      response?.data?.aboutImages?.forEach((imageInfo) => {
        let imageUrl = baseUrl + "/" + imageInfo.path;
        const imageData = { imageUrl: imageUrl, desc: "" };
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
      const response = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, '/team/getClientTeamMember', {}, {}, { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization }, false);
      // setPropertyData(response.data);

      setTeam(response.data.list);
      setViewDetails(true);
      // console.log('About us details', aboutUsInfo, aboutSection);
    };
    getData();
  };

  return (
    <div style={{ background: '#fff' }}>
      <PageBanner
        bgImage={'/about_us.jpeg'}
        title="About Us"
        currentPage="ABOUT US"
      />
      {/* <Gallery /> */}
      {viewDetails ? (
        <Container>
          <Box className="content-wrapper">
            <Box className="about-block-item">
              <Grid container alignItems="center">
                <Grid className="about-block-images" item xs={12} md={6}>
                  <Box className="about-block-image"> 
                   {/* <img src={aboutUsSection.images[0].imageUrl || "about-img.jpeg"} height={"auto"} alt={''} /> */}
                   {/* <OwlCarouselSlider images={aboutUsSection.images || []} autoplay={true} /> */}
                   <img src={process.env.PUBLIC_URL + '/images/about-img.jpg'} />
                   </Box>
                </Grid>
                <Grid className="about-block-summery" item xs={12} md={6}>
                  <Box className="about-block-content">
                    <Typography variant="h3">Real Estate Services In Jaipur</Typography>
                    <Typography>
                      Vishal Construction Company is a Jaipur based construction company which today is a renowned name in providing best in class real estate services to its clients located all over India. Vishal Construction Company specializes in its area of work wherein they are expert in the real estate services, construction process of housing, commercial and other types of properties. They majorly serve clientele of Rajasthan, Hyderabad, Kolkata and other metro cities of India.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box className="about-page-item about-whyus-item">
              <Grid container spacing={3}>
                <Grid className="about-page-summery" item xs={12} md={6}>
                  <Box className="about-page-content">
                    <Typography variant="h4">Why Us</Typography>
                    <Typography variant="h3">Why Are We Awesome?</Typography>
                    <Typography>
                      Vishal Construction Company is a Jaipur based construction company which today is a renowned name in providing best in class real estate services to its clients located all over India. Vishal Construction Company specializes in its area of work wherein they are expert in the real estate services, construction process of housing, commercial and other types of properties. They majorly serve clientele of Rajasthan, Hyderabad, Kolkata and other metro cities of India.
                    </Typography>
                  </Box>
                </Grid>
                <Grid className="about-page-images" item xs={12} md={6} className={classes.style2}>
                  <Box className="about-page-image"><img src="Happy-Family.jpeg" /></Box>
                </Grid>
              </Grid>
            </Box>

            <Box className="about-page-item">
              <Box className="about-page-content">
                <Typography variant="h4"> {aboutUsSection.header}</Typography>
                <Typography variant="h3"> {aboutUsSection.title}</Typography>
                <Typography>
                  {aboutUsSection.description}
                </Typography>
              </Box>
            </Box>

            <Box className="page-section-header" align="center">
              <Box component="h2" className="page-section-title">Our Team</Box>
            </Box>
            <OurTeam team={team} />
          </Box>
        </Container>
      ) : null}
    </div>
  );
};

export default AboutUsPage;