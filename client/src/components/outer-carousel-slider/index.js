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
import './featured.css';

const useStyles = makeStyles((theme) => ({
    text1: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#FF7601',
        fontSize: 14,
        marginTop: 10
    },
    text2: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#333333',
        fontSize: 18,
        fontWeight: 'bold'
    },
    text3: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#666666',
        fontSize: 14,
    },
    text4: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#333333',
        fontSize: 14,
        fontWeight: 'bold'
    },
    features: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20
    },
    icon: {
        color: '#FF7601',
        fontSize: 20,
        paddingRight: 10
    },
    btnBox1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        cursor: 'pointer',
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#FF7601',
        color: '#FFFFFF',
        fontFamily: '"Open Sans",sans-serif',
        fontWeight: 'bold'
    },
    btnBox2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        cursor: 'pointer',
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#222222',
        color: '#FFFFFF',
        fontFamily: '"Open Sans",sans-serif',
        fontWeight: 'bold'
    }
}));



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
                <OwlCarousel items={Math.min(3, total)} className="owl-theme" loop={false} nav={true} margin={8} autoPlay={true} dots={false} navText={['next', 'prev']}>
                    {data.map((item, i) => {
                        const {_id, userId, propertyDetails, status, iAm, pType, postingAs, nameOfProject, propertTag, created, updated, __v, features} = item;
                        const propertyFor = item.for;
                        return (
                            <Box key={i} style={{marginTop: 50, width: 350}}>
                                <Grid contaienr >
                                    <Grid item xs={12} md={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                                        {/* <InnerCarouselSlider /> */}
                                        <div class="property-box" style={{position: 'relative'}}>
                                            {propertTag ? <span class="featured">{propertTag}</span> : null}
                                            <img className="img" src={process.env.PUBLIC_URL + '/property_img3.jpeg'} style={{width: 350, height: 300}} />
                                        </div>

                                        <Typography className={classes.text1} style={{minHeight: 20}}>{pType}</Typography>
                                        <Typography className={classes.text2}>{nameOfProject}</Typography>
                                        {/* <Grid contaienr>
                                        <Grid item style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 10}}>
                                            <LocationOnIcon style={{color: '#FF7601', fontSize: 20, padding: 0, marginRight: 8}} />
                                            <Typography className={classes.text3}>{iAm}</Typography>
                                        </Grid>
                                    </Grid> */}
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={6} md={6} className={classes.features}>
                                            <ZoomOutMapIcon className={classes.icon} />
                                            <Typography className={classes.text4}>{features[0]?.builtUpArea} Sq-Ft</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={6} className={classes.features}>
                                            <LocalHotelIcon className={classes.icon} />
                                            <Typography className={classes.text4}>{features[0]?.bedrooms} Bedrooms</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={6} className={classes.features}>
                                            <LocalHotelIcon className={classes.icon} />
                                            <Typography className={classes.text4}>{features[0]?.balconies} Balconies</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={6} className={classes.features}>
                                            <BathtubIcon className={classes.icon} />
                                            <Typography className={classes.text4}>{features[0]?.bathrooms} Bathroom</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container style={{marginTop: 20}}>
                                        <Grid item xs={6} md={6}>
                                            <Box className={`${classes.btnBox1} btn-more-detail`} component={RouterLink} to={
                                                {
                                                    pathname: '/home-detail',
                                                    state: _id
                                                }}>
                                                MORE DETAIL
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} md={6}>
                                            <Box className={`${classes.btnBox2} btn-call-now`}>
                                                CALL NOW
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        );
                    })}
                </OwlCarousel> : <CustomNoRowsOverlay />}
        </div>
    );
};

export default OuterCarouselSlider;
