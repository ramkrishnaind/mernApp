import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, makeStyles, Box, TextField, Button } from '@material-ui/core';
import PageBanner from '../../../components/page-banner';
import '../my-account.css';

const useStyles = makeStyles((theme) => ({

}));

const MyFavorite = (props) => {


  return (
    <div>
      <PageBanner
        bgImage={'/about_us.jpeg'}
        title="My Favorite"
        currentPage="My Favorite"
      />

      <Container>
        <Box className="content-wrapper">
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} className="sidebar-section">
              <Box className="box-item">
                <Box className="box-wrap box-border-bottom box-radius">
                  <Box className="user-intro box-body">
                    <Box className="user-icon">  <img src="images/profile-img.jpg" alt="" /> </Box>
                    <Box className="user-info">
                      <h4> Arjun Singh</h4>
                      <p>Permium</p>
                    </Box>
                  </Box>
                  <Box className="box-body p-0">
                    <ul className="sidebar-account-menu">
                      <li><a href="/my-account"> <i className="fas fa-house-user"></i>My Account </a> </li>
                      <li> <a href="/my-profile"> <i className="far fa-user"></i>My Profile </a> </li>
                      <li> <a href="/my-property"> <i className="fas fa-building"></i>My Property </a> </li>
                      <li> <a href="/my-booking"> <i className="far fa-list-alt"></i>My Booking </a> </li>
                      <li className="active"> <a href="my-favorite"> <i className="far fa-heart"></i>My Favorite </a> </li>
                      <li> <a className="logout" href="#"><i className="fas fa-sign-out-alt"></i>Log out</a> </li>
                    </ul>
                  </Box>
                </Box>
              </Box>              
            </Grid>
            {/* <!-- sidebar-section --> */}
            <Grid item xs={12} md={9} className="content-area">
              <Box className="content-section">
                <Box className="box-item">
                  <Box className="box-wrap box-border-bottom box-radius">
                    <Box className="box-header"><h5 className="box-title">My Favorite Lists</h5></Box>
                    <Box className="box-body">


                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* <!--content-area--> */}
          </Grid>
        </Box>
      </Container>

    </div>
  );
};

export default MyFavorite;