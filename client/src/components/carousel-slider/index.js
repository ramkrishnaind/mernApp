import React, {useState} from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

import {Grid} from "@material-ui/core";

const OwlCarouselSlider = (props) => {

  const banners = [
    {imageUrl: '/slider/slider1.jpeg', desc: ""},
    {imageUrl: '/slider/slider2.jpeg', desc: ""},
    {imageUrl: '/slider/slider3.jpeg', desc: ""}
  ];

  const [imageBanners] = useState(banners);

  return (
    <Grid container style={{backgroundColor: '#FFFFFF'}}>
      <Grid item xs={12} md={12}>
        <OwlCarousel items={1} className="owl-theme" loop nav={false} margin={8} autoplay={false}>
          {imageBanners.map((banner) => {
            return < div >
              <img className="img" src={process.env.PUBLIC_URL + banner.imageUrl} alt="" />
            </div>;
          })}
        </OwlCarousel>
      </Grid>
    </Grid >
  );
};

export default OwlCarouselSlider;;
