import React, {useState} from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./outer-carousel-slider.css";
import PropertyViewCard from "../property-view-card";
import {Typography, Grid, Container, makeStyles, Button, Box} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import {Link as RouterLink} from "react-router-dom";
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import BathtubIcon from '@material-ui/icons/Bathtub';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
// import './property-view-card.css';
import InnerCarouselSlider from "../inner-carousel-slider";
import {CustomNoRowsOverlay} from '../../components/no-data-found/no-data-found';
import ApiClient from "../../api-client";
import './featured.css';

const useStyles = makeStyles((theme) => ({

}));

const options = {
    margin: 24,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
            margin: 10,
        },
        576: {
            items: 2,
            margin: 10,
        },
        768: {
            items: 2,
            margin: 15,
        },
        992: {
            items: 3,
        }
    },
};

const OuterCarouselSlider = (props) => {

    // console.log("property props", props);
    let total = 0;
    let data = [];
    if (props && props.items) {
        total = props.items.total;
        data = props.items.data;
    }
    const classes = useStyles();

    return (
        <div>
            {total > 0 ?
                <OwlCarousel items={Math.min(3, total)} className="owl-theme" {...options}>
                    {data.map((item, i) => {
                        const {_id, userId, propertyDetails, status, iAm, pType, postingAs, nameOfProject, propertTag, created, updated, __v, features, images} = item;
                        const img = images && images[0]?.mainImage && images[0]?.mainImage[0]?.path ? ApiClient.SERVER_ADDRESS + "/" + images[0]?.mainImage[0]?.path : 'no-image-available-icon-6.png';
                        console.log("img path", img, images);
                        const propertyFor = item.for;
                        return (
                            <Box key={i} className="property-item">
                                <Grid contaienr className="property-wrap">

                                    {/* <InnerCarouselSlider /> */}
                                    <Grid className="property-image" style={{position: 'relative'}}>
                                        {propertTag ? <span class="featured">{propertTag}</span> : null}
                                        <img className="img" style={{height: "238px"}} src={img} />
                                    </Grid>

                                    <Grid className="property-summery">
                                        <Box component="span" className="property-tag">{pType}</Box>
                                        <Typography variant="h3" className="property-title">{nameOfProject}</Typography>

                                        <Grid container className="property-information">
                                            <Grid item xs={6} md={6} className="property-feature">
                                                <ZoomOutMapIcon />
                                                <Typography>{features[0]?.builtUpArea} Sq-Ft</Typography>
                                            </Grid>
                                            <Grid item xs={6} md={6} className="property-feature">
                                                <LocalHotelIcon />
                                                <Typography >{features[0]?.bedrooms} Bedrooms</Typography>
                                            </Grid>
                                            <Grid item xs={6} md={6} className="property-feature">
                                                <LocalHotelIcon />
                                                <Typography>{features[0]?.balconies} Balconies</Typography>
                                            </Grid>
                                            <Grid item xs={6} md={6} className="property-feature">
                                                <BathtubIcon />
                                                <Typography>{features[0]?.bathrooms} Bathroom</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container className="property-button">
                                            <Box className="btn btn-primary" component={RouterLink} to={
                                                {
                                                    pathname: '/home-detail',
                                                    state: _id
                                                }}>
                                                MORE DETAIL
                                            </Box>
                                            <Box className="btn btn-secondary">
                                                CALL NOW
                                            </Box>
                                        </Grid>
                                    </Grid>

                                    {/* <Grid contaienr>
                                        <Grid item style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 10}}>
                                            <LocationOnIcon style={{color: '#FF7601', fontSize: 20, padding: 0, marginRight: 8}} />
                                            <Typography className={classes.text3}>{iAm}</Typography>
                                        </Grid>
                                    </Grid> */}

                                </Grid>
                            </Box>
                        );
                    })}
                </OwlCarousel> : <CustomNoRowsOverlay />}
        </div>
    );
};

export default OuterCarouselSlider;
