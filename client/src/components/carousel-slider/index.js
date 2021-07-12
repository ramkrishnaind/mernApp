import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

import { Grid } from "@material-ui/core";

const OwlCarouselSlider = (props) => {
  return (
    <Grid container style={{backgroundColor: '#FFFFFF'}}>
      <Grid item xs={12} md={12}>
        <OwlCarousel items={1} className="owl-theme" loop nav={false} margin={8} autoplay ={false}>
          <div>
            <img className="img" src={process.env.PUBLIC_URL + '/slider/slider1.jpeg'} />
          </div>
          <div>
          <img className="img" src={process.env.PUBLIC_URL + '/slider/slider2.jpeg' }/>
          </div>
          <div>
          <img className="img" src={process.env.PUBLIC_URL + '/slider/slider3.jpeg'}/>
          </div>
        </OwlCarousel>
      </Grid>
    </Grid>
  );
};

export default OwlCarouselSlider;
