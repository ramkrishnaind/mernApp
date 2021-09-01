import React, {useEffect} from "react";
import {Typography, Grid, Container, makeStyles, Button, Box, TextField, Label} from "@material-ui/core";
import GoogleMapReact from 'google-map-react';
import MapContainer from './MapContainer';
import MapForm from './form';

const useStyles = makeStyles((theme) => ({
    text1: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#06AEB8',
        fontSize: 15,
        fontWeight: 'bold'
    },
    text2: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#333333',
        fontSize: 30,
        fontWeight: 400
    },
}));

const SectionMap = props => {
    const {title, subtitle} = props;
    const classes = useStyles();
    return (
        <Grid container >
            <Grid item xs={8} md={8} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', overflow: 'hidden'}}>

                <MapContainer />

            </Grid>

            <Grid item xs={4} md={4} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <MapForm />
            </Grid>
        </Grid>
    );
};

export default SectionMap;