import React from "react";
import {Typography, Grid, makeStyles, Box} from "@material-ui/core";
import './section-client.css';
import SectionHeader from "../section-header";
import APP_CONSTANTS from "../../constants/app-constants";
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import ApiClient from '../../api-client/index';
import {Link as RouterLink} from 'react-router-dom';

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
    // console.log("dealingInData", props.dealingInData.media);
    const {header, title, description, media, items} = props.dealingInData;
    return (
        <Grid container>
            <Grid item xs={12} md={6} style={{display: 'flex', flexDirection: 'column'}}>
                <SectionHeader title={header} subtitle={title} style={{color: '#FFFFFF'}} />
                <Typography className={classes.text1} style={{lineHeight: "2em"}}>
                    {description}
                </Typography>
                <Grid container style={{marginTop: 30}}>
                    {(items || []).map((item, i) => {
                        const {title, shortDescription, icon, _id} = item;
                        // console.log("title,shortDescription,icon", title, shortDescription, icon, item);
                        return (<Grid key={i} item xs={12} md={6} style={{display: 'flex', flexDirection: 'row', paddingTop: 5, paddingBottom: 20}}>
                            <LocalHotelIcon style={{color: '#FF7601', fontSize: 40, padding: 0, marginRight: 8}} />
                            <Grid container>
                                <Grid component={RouterLink} to={{pathname: '/dealingInItem-details', state: _id}} style={{display: 'flex', flexDirection: 'column', textDecoration: 'none', cursor: 'pointer'}}>
                                    <Typography className={classes.text2} style={{textTransform: 'uppercase'}}>{title}</Typography>
                                    <Typography className={classes.text3} >{shortDescription}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>);

                    })}
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                {
                    media && (media[0].video[0].length === 0 ? <img src={ApiClient.SERVER_ADDRESS + "/" + media[0].image[0].path} alt="" style={{height: 250, border: '10px solid #00b0b8'}} />
                        : <video playsInLine="playsinline" autoPlay="autoplay" muted="muted" loop="loop" style={{height: 250, border: '10px solid #00b0b8'}}>
                            <source src={ApiClient.SERVER_ADDRESS + "/" + media[0].video[0].path} type="video/mp4" ></source>
                        </video >)
                }
            </Grid>
        </Grid>
    );

};

export default SectionClient;