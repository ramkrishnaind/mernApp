import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Grid, Box } from '@material-ui/core';
import "./section-building-materials.css";

const options = {
  margin: 0,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 2,          
      },
      576: {
          items: 2,          
      },
      768: {
          items: 3,          
      },
      992: {
          items: 4,
      }
  },
};

const SectionBM = (props) => {
 
  return (

    <Grid className="building-material-wrapper" container>
      <OwlCarousel className="building-material-carousel owl-theme" {...options}>
        <Box className="building-material-wrap">
          <img src={process.env.PUBLIC_URL + '/images/building_material_img/m2.png'} />
          <Box className="mask mask-1"></Box>
          <Box className="mask mask-2"></Box>
          <Box className="content"><h3>Tata Tiscon</h3></Box>
        </Box>
        <Box className="building-material-wrap">
          <img src={process.env.PUBLIC_URL + '/images/building_material_img/m3.png'} />
          <Box className="mask mask-1"></Box>
          <Box className="mask mask-2"></Box>
          <Box className="content"><h3>Ambuja Cement</h3></Box>
        </Box>
        <Box className="building-material-wrap">
          <img src={process.env.PUBLIC_URL + '/images/building_material_img/m4.png'} />
          <Box className="mask mask-1"></Box>
          <Box className="mask mask-2"></Box>
          <Box className="content"><h3>Sunmica</h3></Box>
        </Box>
        <Box className="building-material-wrap">
          <img src={process.env.PUBLIC_URL + '/images/building_material_img/m5.png'} />
          <Box className="mask mask-1"></Box>
          <Box className="mask mask-2"></Box>
          <Box className="content"><h3>Sun Microsystem</h3></Box>
        </Box>
        <Box className="building-material-wrap">
          <img src={process.env.PUBLIC_URL + '/images/building_material_img/m6.png'} />
          <Box className="mask mask-1"></Box>
          <Box className="mask mask-2"></Box>
          <Box className="content"><h3>Rathi Steel</h3></Box>
        </Box>
        <Box className="building-material-wrap">
          <img src={process.env.PUBLIC_URL + '/images/building_material_img/m7.png'} />
          <Box className="mask mask-1"></Box>
          <Box className="mask mask-2"></Box>
          <Box className="content"><h3>Jaquar</h3></Box>
        </Box>
        <Box className="building-material-wrap">
          <img src={process.env.PUBLIC_URL + '/images/building_material_img/m8.png'} />
          <Box className="mask mask-1"></Box>
          <Box className="mask mask-2"></Box>
          <Box className="content"><h3>Shree Cement</h3></Box>
        </Box>
        <Box className="building-material-wrap">
          <img src={process.env.PUBLIC_URL + '/images/building_material_img/m9.png'} />
          <Box className="mask mask-1"></Box>
          <Box className="mask mask-2"></Box>
          <Box className="content"><h3>Somany</h3></Box>
        </Box>
        <Box className="building-material-wrap">
          <img src={process.env.PUBLIC_URL + '/images/building_material_img/m10.png'} />
          <Box className="mask mask-1"></Box>
          <Box className="mask mask-2"></Box>
          <Box className="content"><h3>Shreenath Steel</h3></Box>
        </Box>
        <Box className="building-material-wrap">
          <img src={process.env.PUBLIC_URL + '/images/building_material_img/m11.png'} />
          <Box className="mask mask-1"></Box>
          <Box className="mask mask-2"></Box>
          <Box className="content"><h3>Ashirvad</h3></Box>
        </Box>
        <Box className="building-material-wrap">
          <img src={process.env.PUBLIC_URL + '/images/building_material_img/m12.png'} />
          <Box className="mask mask-1"></Box>
          <Box className="mask mask-2"></Box>
          <Box className="content"><h3>Sony Center</h3></Box>
        </Box>
        <Box className="building-material-wrap">
          <img src={process.env.PUBLIC_URL + '/images/building_material_img/m13.png'} />
          <Box className="mask mask-1"></Box>
          <Box className="mask mask-2"></Box>
          <Box className="content"><h3>Hindware</h3></Box>
        </Box>

      </OwlCarousel>
    </Grid>
  );

};
export default SectionBM;