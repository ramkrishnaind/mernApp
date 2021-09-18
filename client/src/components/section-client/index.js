import React from "react";
import { Typography, Grid, makeStyles, Box } from "@material-ui/core";
import './section-client.css';
import SectionHeader from "../section-header";
import APP_CONSTANTS from "../../constants/app-constants";
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import ApiClient from '../../api-client/index';
import { Link as RouterLink } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

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
    const { header, title, description, media, items } = props.dealingInData;
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <SectionHeader title={header} subtitle={title} style={{ color: '#FFFFFF' }} />
                <Box className="client-text">
                    <Typography>{description}</Typography>
                </Box>
                <Grid container spacing={2}>
                    {(items || []).map((item, i) => {
                        const { title, shortDescription, icon, _id } = item;
                        // console.log("title,shortDescription,icon", title, shortDescription, icon, item);
                        return (<Grid key={i} item xs={12} md={6} >
                            <Box className="client-block-wrap">
                                <Box className="client-block-icon">
                                    <LocalHotelIcon />
                                </Box>
                                <Box className="client-block-summery">
                                    <Typography><strong>{title}</strong></Typography>
                                    <Typography>{shortDescription}</Typography>
                                </Box>
                            </Box>
                        </Grid>);
                    })}
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box className="client-video-block">
                    {
                        media && (media[0].video[0].length === 0 ?
                            <img src={ApiClient.SERVER_ADDRESS + "/" + media[0].image[0].path} alt="" />
                            :
                            <video className="client-video" playsInLine="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                                <source src={ApiClient.SERVER_ADDRESS + "/" + media[0].video[0].path} type="video/mp4" ></source>
                            </video >)
                    }
                </Box>
            </Grid>
        </Grid>
    );

};

export default SectionClient;