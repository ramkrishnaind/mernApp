import React from "react";
import {Typography, Grid, makeStyles, } from "@material-ui/core";
import './section-client.css';
import SectionHeader from "../section-header";
import APP_CONSTANTS from "../../constants/app-constants";
import LocalHotelIcon from '@material-ui/icons/LocalHotel';

const useStyles = makeStyles((theme) => ({
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
    const {title, subtitle, description, isImg, image_url, media, items} = props.clientLookingforInfo;
    return (
        <Grid container>
            <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'column'}}>
                <SectionHeader title={title} subtitle={subtitle} style={{color: '#FFFFFF'}} />
                <Typography className={classes.text1} style={{lineHeight: "2em"}}>
                    {description}
                </Typography>
                <Grid container style={{marginTop: 30}}>
                    {(items || []).map(({name, description, icon}) =>
                        <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'row', paddingTop: 5, paddingBottom: 20}}>
                            <LocalHotelIcon style={{color: '#FF7601', fontSize: 40, padding: 0, marginRight: 8}} />
                            <Grid container>
                                <Grid style={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography className={classes.text2}>{name}</Typography>
                                    <Typography className={classes.text3}>{description}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>)}
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                {isImg ? <img src={image_url} alt="" style={{height: 250, border: '10px solid #00b0b8'}} />
                    : <video playsInLine="playsinline" autoplay="autoplay" muted="muted" loop="loop" style={{height: 250, border: '10px solid #00b0b8'}}>
                        <source src={media} type="video/mp4" ></source>
                    </video >
                }
            </Grid>
        </Grid>
    );

};

export default SectionClient;