import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, makeStyles, Box } from '@material-ui/core';
import '../about-us.css';
import PageBanner from '../../../components/page-banner';
import DescriptionIcon from '@material-ui/icons/Description';


const useStyles = makeStyles((theme) => ({

}));

const InvestWithUs = (props) => {
  const classes = useStyles();

  return (
    <div style={{ background: '#fff' }}>
      <PageBanner
        bgImage={'/about_us.jpeg'}
        title="Invest With Us"
        currentPage="Invest With Us"
      />

      <Container>
        <Box className="content-wrapper">
          <Box className="about-page-item">
            <Box className="about-page-content" align="center">
              <Typography variant="h3">Invest Now For Consistent Returns</Typography>
              <Typography>
                Vishal Construction Company offers an array of reasons to help investors of all experience level gain the maximum return of investment. Our focus always remains on enchanting our invaluable customers and stakeholders.
              </Typography>
            </Box>
          </Box>
          <Box className="about-page-item">
            <Grid container spacing={3}>
              <Grid className="about-page-summery" item xs={12} md={7}>
                <Box className="about-page-content">
                  <Typography variant="h3">Let’s have a look at innumerous reasons to invest in real estate in Jaipur</Typography>
                  <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Typography>
                  <ul>
                    <li>Jaipur has become the ground for real estate boom and is known to be the eleventh largest city of India.</li>
                    <li>Jaipur is reckoned to be a mega city by 2025 and will surpass a population of approx. 80 Million people.</li>
                    <li>Jaipur boasts an International airport which provides availability to all the major destinations.</li>
                    <li>Over the years it has become the largest center of Gems and Jewelry. Jaipur is known to be amongst the biggest exporters of the same which helps in developing the economy.</li>
                    <li>Jaipur boasts the best of medical facilities like BMCHRC, EHCC, SDMG, Fortis, SMS Hospital etc., which makes it a reliable destination.</li>
                  </ul>
                </Box>
              </Grid>
              <Grid className="about-page-images" item xs={12} md={5} className={classes.style2}>
                <Box className="about-page-image"><img src="Happy-Family.jpeg" /></Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Box className="invest-items-wrapper">
        <Container>
          <Box className="page-section-header" align="center">
            <Box component="h2" className="page-section-title">How We Invest</Box>
          </Box>
          <Box className="invest-items">
            <Grid container spacing={3}>
              <Grid className="invest-item" item xs={12} md={4}>
                <Box className="invest-icon">
                  <DescriptionIcon />
                </Box>
                <Typography variant="h4">Customer Experience</Typography>
                <Typography> We always like our customers to have an unparalleled level of service experience. Our executives are available 24*7 to assist you in case any doubt/question triggers your mind.</Typography>
              </Grid>

              <Grid className="invest-item" item xs={12} md={4}>
                <Box className="invest-icon">
                  <DescriptionIcon />
                </Box>
                <Typography variant="h4">Build Your Knowledge</Typography>
                <Typography>Go through the informational articles provided by Vishal Construction Company to grasp a strong understanding of investment strategies and real estate market trends.</Typography>
              </Grid>

              <Grid className="invest-item" item xs={12} md={4}>
                <Box className="invest-icon">
                  <DescriptionIcon />
                </Box>
                <Typography variant="h4">Your Next Step</Typography>
                <Typography> We always like our customers to have an unparalleled level of service experience. Our executives are available 24*7 to assist you in case any doubt/question triggers your mind.</Typography>
              </Grid>

            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default InvestWithUs;