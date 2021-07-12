import React, {useEffect} from "react";
import { Typography, Grid, Container, makeStyles, Button, Box } from "@material-ui/core";
import './section-client.css';
import SectionHeader from "../section-header";
import APP_CONSTANTS from "../../constants/app-constants";
import LocalHotelIcon from '@material-ui/icons/LocalHotel';

const useStyles = makeStyles((theme)=> ({
    text1: {
      fontFamily: '"Open Sans",sans-serif',
      color: '#FFFFFF',
      fontSize: 14,
      marginTop: 30
    },
    text2: {
      fontFamily: '"Open Sans",sans-serif',
      color: '#FFFFFF',
      fontSize: 30,
      fontWeight: 400
    },
    text3: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#FFFFFF',
        fontSize: 14,
      },
  }));

const SectionClient = props => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'column'}}>
                <SectionHeader title={APP_CONSTANTS.section_client_title} subtitle={APP_CONSTANTS.section_client_subtitle} style={{color: '#FFFFFF'}} />
                <Typography className={classes.text1}>
                    Extensive upgrades and thorough maintenance have kept this home in prime condition. 
                    Hardwood floors and new carpets create a very comfortable living space.
                </Typography>
                <Grid container style={{marginTop: 30}}>
                <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'row'}}>
                    <LocalHotelIcon style={{color: '#FF7601', fontSize: 40, padding: 0, marginRight: 8}} />
                    <Grid container>
                        <Grid style={{display: 'flex', flexDirection: 'column'}}>
                            <Typography className={classes.text2}>HOUSE</Typography>
                            <Typography className={classes.text3}>We have the best properties Sale, Buy, and Rent Dealers.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'row'}}>
                    <LocalHotelIcon style={{color: '#FF7601', fontSize: 40, padding: 0, marginRight: 8}} />
                    <Grid container>
                        <Grid style={{display: 'flex', flexDirection: 'column'}}>
                            <Typography className={classes.text2}>LAND</Typography>
                            <Typography className={classes.text3}>We have the best properties Sale, Buy, and Rent Dealers.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'row'}}>
                    <LocalHotelIcon style={{color: '#FF7601', fontSize: 40, padding: 0, marginRight: 8}} />
                    <Grid container>
                        <Grid style={{display: 'flex', flexDirection: 'column'}}>
                            <Typography className={classes.text2}>OFFICE</Typography>
                            <Typography className={classes.text3}>We have the best properties Sale, Buy, and Rent Dealers.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'row'}}>
                    <LocalHotelIcon style={{color: '#FF7601', fontSize: 40, padding: 0, marginRight: 8}} />
                    <Grid container>
                        <Grid style={{display: 'flex', flexDirection: 'column'}}>
                            <Typography className={classes.text2}>BUSINESS</Typography>
                            <Typography className={classes.text3}>We have the best properties Sale, Buy, and Rent Dealers.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
    );

}

export default SectionClient;