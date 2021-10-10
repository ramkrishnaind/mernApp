import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, makeStyles, Box, TextField, Button } from '@material-ui/core';
import PageBanner from '../../components/page-banner';

const useStyles = makeStyles((theme) => ({

}));

const Finance = (props) => {

  return (
    <div>
      <PageBanner
        bgImage={'/about_us.jpeg'}
        title="Finance"
        currentPage="Finance"
      />

      <Container>
        <Box className="content-wrapper">
          <Box className="about-block-item">
            <Grid container spacing={3} alignItems="center">
              <Grid className="about-block-images" item xs={12} md={5} className="">
                <Box className="about-block-image"><img src="../images/about-img.jpg" alt='' />

                  <div id="form1" class="finance-form-block">
                    <form className="map-form finance-form">
                      <TextField
                        className="form-group"
                        label="Loan Amount"
                        variant="filled"
                        required
                        value="100000"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        className="form-group"
                        label="Interest Rate"
                        variant="filled"
                        required
                        value="10.5"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        className="form-group"
                        label="Loan Tenure"
                        variant="filled"
                        required
                        value="36"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />

                      <div className="form-btn">
                        <Button type="submit" className="search-btn" variant="contained" >
                          Search
                        </Button>
                      </div>
                    </form>

                  </div>
                </Box>
              </Grid>
              <Grid className="about-block-summery" item xs={12} md={7}>
                <Box className="about-block-content">
                  <Typography variant="h3">Finance </Typography>
                  <Typography>
                    All the Vishal Construction Company projects are backed by loan facilities from leading banks and financial institutions like SBI, PNB, BOB, HDFC Bank, ICICI Bank, India Bulls, Tata Capital etc. You may avail of flexible and hassle-free finance options for residential and commercial property purchase. The Vishal Construction Company Sales Advisory Team will be glad to help you in loan procurement, financial planning and related matters. Please contact us on goru1994@gmail.com for any queries.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>


          <Box className="page-section-header" align="center">
            <Box component="h2" className="page-section-title">OUR FINANCE BANK</Box>
          </Box>
          <Box className="finance-bank-section">
            <Box className="finance-bank-outer">
              <Box className="finance-bank-wrap">
                <img src="../images/bank1.jpg" alt='' />
              </Box>
              <Box className="finance-bank-wrap">
                <img src="../images/bank2.jpg" alt='' />
              </Box>
              <Box className="finance-bank-wrap">
                <img src="../images/bank3.jpg" alt='' />
              </Box>
              <Box className="finance-bank-wrap">
                <img src="../images/bank4.jpg" alt='' />
              </Box>
              <Box className="finance-bank-wrap">
                <img src="../images/bank5.jpg" alt='' />
              </Box>
              <Box className="finance-bank-wrap">
                <img src="../images/bank6.jpg" alt='' />
              </Box>
              <Box className="finance-bank-wrap">
                <img src="../images/bank7.jpg" alt='' />
              </Box>
              <Box className="finance-bank-wrap">
                <img src="../images/bank8.jpg" alt='' />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

    </div>
  );
};

export default Finance;