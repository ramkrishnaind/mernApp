import React,{useState} from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./outer-carousel-slider.css";
import PropertyViewCard from "../property-view-card";
import { Typography, Grid, Container, makeStyles, Button, Box } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import BathtubIcon from '@material-ui/icons/Bathtub';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
// import './property-view-card.css';
import InnerCarouselSlider from "../inner-carousel-slider";

const useStyles = makeStyles((theme)=> ({
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
    console.log("property props",props)
    let total = 0
    let data = []
    if(props && props.items){
        total = props.items.total
        data = props.items.data
    }
    const classes = useStyles();
    
  return (
    <div>
        <OwlCarousel items={Math.min(3,total)} className="owl-theme"  loop nav={false} margin={8} autoplay ={true}  dots={false}>
          {data.map(item => {
              const {_id,userId,propertyDetails,status,iAm,pType,postingAs,nameOfProject,propertTag,created,updated,__v} = item;
              const propertyFor = item.for;
              return (
                <Box style={{marginTop: 50, width: 350}}>
                <Grid contaienr >
                    <Grid item xs={12} md={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                        {/* <InnerCarouselSlider /> */}
                        <img className="img" src={process.env.PUBLIC_URL + '/property_img3.jpeg'} style={{width: 350, height: 300}} />
                        <Typography className={classes.text1}>{pType}</Typography>
                        <Typography className={classes.text2}>{nameOfProject}</Typography>
                        <Grid contaienr>
                            <Grid item style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 10}}>
                                <LocationOnIcon style={{color: '#FF7601', fontSize: 20, padding: 0, marginRight: 8}} />
                                <Typography className={classes.text3}>{iAm}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} md={6} className={classes.features}>
                            <ZoomOutMapIcon className={classes.icon} />
                            <Typography className={classes.text4}>356 Sq-Ft</Typography>
                        </Grid>
                        <Grid item xs={6} md={6} className={classes.features}>
                            <LocalHotelIcon className={classes.icon} />
                            <Typography className={classes.text4}>4 Bedrooms</Typography>
                        </Grid>
                        <Grid item xs={6} md={6} className={classes.features}>
                            <DriveEtaIcon className={classes.icon} />
                            <Typography className={classes.text4}>3 Garage</Typography>
                        </Grid>
                        <Grid item xs={6} md={6} className={classes.features}>
                            <BathtubIcon className={classes.icon} />
                            <Typography className={classes.text4}>3 Bathroom</Typography>
                        </Grid>
                     </Grid>
                     <Grid container style={{marginTop: 20}}>
                         <Grid item xs={6} md={6}>
                             <Box className={`${classes.btnBox1} btn-more-detail`}>
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
        </OwlCarousel>
      </div>
  );
};

export default OuterCarouselSlider;
