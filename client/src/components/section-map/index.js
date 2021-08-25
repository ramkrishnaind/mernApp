import React, {useEffect} from "react";
import { Typography, Grid, Container, makeStyles, Button, Box, TextField, Label} from "@material-ui/core";
import GoogleMapReact from 'google-map-react';

const useStyles = makeStyles((theme)=> ({
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
        <Grid container>
            <Grid item xs={8} md={8} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <Grid container>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14241.775875233896!2d75.8471262!3d26.8258279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c8866c031223a0a!2sFlats%20In%20Jaipur%20%3A%20Vishal%20Construction%20Company!5e0!3m2!1sen!2sin!4v1616656669208!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                </Grid>
            </Grid>
            
            <Grid item xs={4} md={4} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <Grid container style={{Height: '100%'}}>
                    <Grid item xs={12} md={12} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                        <Grid container>
                            <div>Search</div>
                            <TextField />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                        <Grid container>
                            <div>State</div>
                            <TextField />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                        <Grid container>
                            <div>City</div>
                            <TextField />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                        <Grid container>
                            <Button>Search</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SectionMap;