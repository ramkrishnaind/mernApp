import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, makeStyles, Box, TextField, Button } from '@material-ui/core';
import PageBanner from '../../../components/page-banner';
import '../my-account.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import BathtubIcon from '@material-ui/icons/Bathtub';

const settings1 = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'linear',
};

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
                      <Grid container spacing={2} className="my-property-wrapper">
                        <Grid item xs={12} sm={6} md={4}>
                          <Box className="property-item my-property-item">
                            <Grid contaienr className="property-wrap">
                              <Grid class="property-favorite-remove">                               
                                  <a href="#" class="remove remove-from-favorite" title="Remove this Property">×</a>
                              </Grid>
                              <Grid className="property-image">
                                <Slider {...settings1}>
                                  <Box className="property-image-thumb">
                                    <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} />
                                  </Box>
                                  <Box className="property-image-thumb">
                                    <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} />
                                  </Box>
                                  <Box className="property-image-thumb">
                                    <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} />
                                  </Box>
                                </Slider>
                              </Grid>
                              <Grid className="property-summery">
                                <Box component="span" className="property-tag">RESIDENTIAL</Box>
                                <Typography variant="h3" className="property-title">VISHAL HEAVENS</Typography>
                                <Grid container className="property-information">
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <ZoomOutMapIcon />
                                    <Typography>1200 Sq-Ft</Typography>
                                  </Grid>
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <LocalHotelIcon />
                                    <Typography >2 Bedrooms</Typography>
                                  </Grid>
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <LocalHotelIcon />
                                    <Typography>1 Balconies</Typography>
                                  </Grid>
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <BathtubIcon />
                                    <Typography>2 Bathroom</Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid container className="property-button">
                                <a className="btn btn-primary" href="/"> MORE DETAIL</a>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <Box className="property-item my-property-item">
                            <Grid contaienr className="property-wrap">
                              <Grid class="property-favorite-remove">                               
                                  <a href="#" class="remove remove-from-favorite" title="Remove this product">×</a>
                              </Grid>
                              <Grid className="property-image">
                                <Slider {...settings1}>
                                  <Box className="property-image-thumb">
                                    <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} />
                                  </Box>
                                  <Box className="property-image-thumb">
                                    <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} />
                                  </Box>
                                  <Box className="property-image-thumb">
                                    <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} />
                                  </Box>
                                </Slider>
                              </Grid>
                              <Grid className="property-summery">
                                <Box component="span" className="property-tag">RESIDENTIAL</Box>
                                <Typography variant="h3" className="property-title">VISHAL HEAVENS</Typography>
                                <Grid container className="property-information">
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <ZoomOutMapIcon />
                                    <Typography>1200 Sq-Ft</Typography>
                                  </Grid>
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <LocalHotelIcon />
                                    <Typography >2 Bedrooms</Typography>
                                  </Grid>
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <LocalHotelIcon />
                                    <Typography>1 Balconies</Typography>
                                  </Grid>
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <BathtubIcon />
                                    <Typography>2 Bathroom</Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid container className="property-button">
                                <a className="btn btn-primary" href="/"> MORE DETAIL</a>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <Box className="property-item  my-property-item">
                            <Grid contaienr className="property-wrap">
                            <Grid class="property-favorite-remove">                               
                                  <a href="#" class="remove remove-from-favorite" title="Remove this product">×</a>
                              </Grid>
                              <Grid className="property-image">
                                <Slider {...settings1}>
                                  <Box className="property-image-thumb">
                                    <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} />
                                  </Box>
                                  <Box className="property-image-thumb">
                                    <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} />
                                  </Box>
                                  <Box className="property-image-thumb">
                                    <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} />
                                  </Box>
                                </Slider>
                              </Grid>
                              <Grid className="property-summery">
                                <Box component="span" className="property-tag">RESIDENTIAL</Box>
                                <Typography variant="h3" className="property-title">VISHAL HEAVENS</Typography>
                                <Grid container className="property-information">
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <ZoomOutMapIcon />
                                    <Typography>1200 Sq-Ft</Typography>
                                  </Grid>
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <LocalHotelIcon />
                                    <Typography >2 Bedrooms</Typography>
                                  </Grid>
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <LocalHotelIcon />
                                    <Typography>1 Balconies</Typography>
                                  </Grid>
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <BathtubIcon />
                                    <Typography>2 Bathroom</Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid container className="property-button">
                                <a className="btn btn-primary" href="/"> MORE DETAIL</a>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <Box className="property-item  my-property-item">
                            <Grid contaienr className="property-wrap">
                            <Grid class="property-favorite-remove">                               
                                  <a href="#" class="remove remove-from-favorite" title="Remove this product">×</a>
                              </Grid>
                              <Grid className="property-image">
                                <Slider {...settings1}>
                                  <Box className="property-image-thumb">
                                    <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} />
                                  </Box>
                                  <Box className="property-image-thumb">
                                    <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} />
                                  </Box>
                                  <Box className="property-image-thumb">
                                    <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} />
                                  </Box>
                                </Slider>
                              </Grid>
                              <Grid className="property-summery">
                                <Box component="span" className="property-tag">RESIDENTIAL</Box>
                                <Typography variant="h3" className="property-title">VISHAL HEAVENS</Typography>
                                <Grid container className="property-information">
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <ZoomOutMapIcon />
                                    <Typography>1200 Sq-Ft</Typography>
                                  </Grid>
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <LocalHotelIcon />
                                    <Typography >2 Bedrooms</Typography>
                                  </Grid>
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <LocalHotelIcon />
                                    <Typography>1 Balconies</Typography>
                                  </Grid>
                                  <Grid item xs={6} md={6} className="property-feature">
                                    <BathtubIcon />
                                    <Typography>2 Bathroom</Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid container className="property-button">
                                <a className="btn btn-primary" href="/"> MORE DETAIL</a>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                      </Grid>
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