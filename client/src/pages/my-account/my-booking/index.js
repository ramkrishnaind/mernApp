import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, makeStyles, Box, TextField, Button } from '@material-ui/core';
import PageBanner from '../../../components/page-banner';
import '../my-account.css';

const useStyles = makeStyles((theme) => ({

}));

const MyBooking = (props) => {


  return (
    <div>
      <PageBanner
        bgImage={'/about_us.jpeg'}
        title="My Booking"
        currentPage="My Booking"
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
                      <li><Link to="/my-account"> <i className="fas fa-house-user"></i>My Account </Link> </li>
                      <li> <Link to="/my-profile"> <i className="far fa-user"></i>My Profile </Link> </li>
                      <li> <Link to="/my-property"> <i className="fas fa-building"></i>My Property </Link> </li>
                      <li className="active"> <Link to="/my-booking"> <i className="far fa-list-alt"></i>My Booking </Link> </li>
                      <li> <Link to="my-favorite"> <i className="far fa-heart"></i>My Favorite </Link> </li>
                      <li> <Link className="logout" to="#"><i className="fas fa-sign-out-alt"></i>Log out</Link> </li>
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
                    <Box className="box-header"><h5 className="box-title">My Booking Lists</h5></Box>
                    <Box class="box-body">
                      <Box class="booking-table">
                        <Box class="tabel-row">
                          <Box class="table-cell">Booking No.-1010103</Box>
                          <Box class="table-cell text-right">25 Oct 2021 04:08 PM</Box>
                        </Box>
                        <Box class="tabel-row">
                          <Box class="table-cell booking-img"><Link to="#"><img src="images/property_img3.jpeg" width="75" height="75" /></Link></Box>
                          <Box class="table-cell">
                            <p class="booking-title"><Link to="#">Vishal Heavens Property </Link></p>
                            <p class="booking-status booking-process">Booking Processing!</p>
                          </Box>
                          <Box class="table-cell text-right booking-total">
                            <p class="booking-price"><i class="fas fa-rupee-sign"></i> 150000</p>
                            <p class="booking-view"><Link to="#">View</Link></p>
                          </Box>
                        </Box>
                      </Box>
                      <Box class="booking-table">
                        <Box class="tabel-row">
                          <Box class="table-cell">Booking No.-1010102</Box>
                          <Box class="table-cell text-right">20 Oct 2021 11:08 AM</Box>
                        </Box>
                        <Box class="tabel-row">
                          <Box class="table-cell booking-img"><Link to="#"><img src="images/property_img3.jpeg" width="75" height="75" /></Link></Box>
                          <Box class="table-cell">
                            <p class="booking-title"><Link to="#">Vishal Heavens Property </Link></p>
                            <p class="booking-status booking-sucess">Booking Sucessfully!</p>
                          </Box>
                          <Box class="table-cell text-right booking-total">
                            <p class="booking-price"><i class="fas fa-rupee-sign"></i> 3200000</p>
                            <p class="booking-view"><Link to="#">View</Link></p>
                          </Box>
                        </Box>
                      </Box>
                      <Box class="booking-table">
                        <Box class="tabel-row">
                          <Box class="table-cell">Booking No.-1010101</Box>
                          <Box class="table-cell text-right">15 Oct 2021 06:08 PM</Box>
                        </Box>
                        <Box class="tabel-row">
                          <Box class="table-cell booking-img"><Link to="#"><img src="images/property_img3.jpeg" width="75" height="75" /></Link></Box>
                          <Box class="table-cell">
                            <p class="booking-title"><Link to="#">Vishal Heavens Property </Link></p>
                            <p class="booking-moreitem"><Link to="#">+2 More Item</Link></p>
                            <p class="booking-status booking-cancel">Booking Cancelled!</p>
                          </Box>
                          <Box class="table-cell text-right booking-total">
                            <p class="booking-price"><i class="fas fa-rupee-sign"></i> 490000</p>
                            <p class="booking-view"><Link to="#">View</Link></p>
                          </Box>
                        </Box>
                      </Box>
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

export default MyBooking;