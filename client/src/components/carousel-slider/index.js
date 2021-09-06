import React, {useState} from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

import {Grid} from "@material-ui/core";

const OwlCarouselSlider = (props) => {

  const images = props.images;
  const items = props.items || 1;
  // console.log("images check", images, props, (images || []));
  return (
    <Grid container style={{backgroundColor: '#FFFFFF'}}>
      <Grid item xs={12} md={12}>
        <OwlCarousel items={items} className="owl-theme" loop nav={false} margin={8} autoPlay={props.autoplay} dots={true}>
          {(images || []).map((image, i) => {
            return < div key={i}>
              <img className="img" src={image.imageUrl} style={props.style} alt="" />
            </div>;
          })}
        </OwlCarousel>
      </Grid>
    </Grid >
  );
};

export default OwlCarouselSlider;
