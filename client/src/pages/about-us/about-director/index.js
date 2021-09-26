import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, makeStyles, Box } from '@material-ui/core';
import '../about-us.css';
import PageBanner from '../../../components/page-banner';


const useStyles = makeStyles((theme) => ({

}));

const AboutDirectors = (props) => {
  const classes = useStyles();

  return (
    <div style={{ background: '#fff' }}>
      <PageBanner
        bgImage={'/about_us.jpeg'}
        title="About Directors"
        currentPage="About The Director"
      />

      <Container>
        <Box className="content-wrapper">
          <Box className="about-block-item">
            <Grid container alignItems="center">
              <Grid className="about-block-images" item xs={12} md={6}>
                <Box className="about-block-image">
                  <img src={process.env.PUBLIC_URL + '/images/about-img.jpg'} />
                </Box>
              </Grid>
              <Grid className="about-block-summery" item xs={12} md={6}>
                <Box className="about-block-content">
                  <Typography variant="h3">Director Name</Typography>
                  <Typography>
                    Vishal Construction Company is a Jaipur based construction company which today is a renowned name in providing best in class real estate services to its clients located all over India. Vishal Construction Company specializes in its area of work wherein they are expert in the real estate services, construction process of housing, commercial and other types of properties. They majorly serve clientele of Rajasthan, Hyderabad, Kolkata and other metro cities of India.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box className="about-block-item about-block-left-content">
            <Grid container alignItems="center">
              <Grid className="about-block-summery" item xs={12} md={6}>
                <Box className="about-block-content">
                  <Typography variant="h3">Director Name</Typography>
                  <Typography>
                    Vishal Construction Company is a Jaipur based construction company which today is a renowned name in providing best in class real estate services to its clients located all over India. Vishal Construction Company specializes in its area of work wherein they are expert in the real estate services, construction process of housing, commercial and other types of properties. They majorly serve clientele of Rajasthan, Hyderabad, Kolkata and other metro cities of India.
                  </Typography>
                </Box>
              </Grid>
              <Grid className="about-block-images" item xs={12} md={6}>
                <Box className="about-block-image">
                  <img src={process.env.PUBLIC_URL + '/images/about-img.jpg'} />
                </Box>
              </Grid>

            </Grid>
          </Box>

          <Box className="about-block-item">
            <Grid container alignItems="center">
              <Grid className="about-block-images" item xs={12} md={6}>
                <Box className="about-block-image">
                  <img src={process.env.PUBLIC_URL + '/images/about-img.jpg'} />
                </Box>
              </Grid>
              <Grid className="about-block-summery" item xs={12} md={6}>
                <Box className="about-block-content">
                  <Typography variant="h3">Director Name</Typography>
                  <Typography>
                    Vishal Construction Company is a Jaipur based construction company which today is a renowned name in providing best in class real estate services to its clients located all over India. Vishal Construction Company specializes in its area of work wherein they are expert in the real estate services, construction process of housing, commercial and other types of properties. They majorly serve clientele of Rajasthan, Hyderabad, Kolkata and other metro cities of India.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

        </Box>
      </Container>
      )
    </div>
  );
};

export default AboutDirectors;