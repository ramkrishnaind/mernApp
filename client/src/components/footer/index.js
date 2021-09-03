import React, { useEffect } from "react";
import { Typography, Grid, Container, makeStyles, Button, Box, TextField, IconButton } from "@material-ui/core";
import './footer.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SendIcon from '@material-ui/icons/Send';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import Mobilefootermenu from '../footer/footermobile';
import './footer.css';

const useStyles = makeStyles((theme) => ({
    text1: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text2: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    text3: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#FFFFFF',
        fontSize: 14,
        marginTop: 10
    },
    text4: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    socialBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#06AEB8',
        marginRight: 8,
        width: 30,
        height: 30,
        borderRadius: 25,
        cursor: 'pointer'
    },
    footer_column1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    links: {
        cursor: 'pointer',
    }

}));

const Footer = props => {
    const classes = useStyles();

    return (
        <>

            <Grid container spacing={3}>

                <Grid item xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <Typography className={classes.text1}>VISHAL CONSTRUCTION</Typography>
                    <Grid contaienr>
                        <Grid item xs={12} md={12} className={classes.footer_column1}>
                            <LocationOnIcon style={{ color: '#06AEB8', fontSize: 20, padding: 0, marginRight: 8 }} />
                            <Typography className={classes.text3}>9-A, Brij Vatika, 7 No. Bus Stand, Mahal Road, Jagatpura, Jaipur - 302017 (Rajasthan)</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} className={classes.footer_column1}>
                            <LocationOnIcon style={{ color: '#06AEB8', fontSize: 20, padding: 0, marginRight: 8 }} />
                            <Typography className={classes.text3}>+91-9571647680</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} className={classes.footer_column1}>
                            <LocationOnIcon style={{ color: '#06AEB8', fontSize: 20, padding: 0, marginRight: 8 }} />
                            <Typography className={classes.text3}>info@vishalconstructioncompany.com</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} className={classes.footer_column1}>
                            <LocationOnIcon style={{ color: '#06AEB8', fontSize: 20, padding: 0, marginRight: 8 }} />
                            <Typography className={classes.text3}>Mon - Sat, 08 AM - 06 PM</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <Typography className={classes.text1}>POPULAR LINKS</Typography>
                    <Grid contaienr style={{ width: '100%', display: 'flex', marginTop: 10 }}>
                        <Grid item xs={6} md={6}>
                            <Box>
                                <Typography className={`${classes.text3} links`}>Home</Typography>
                            </Box>
                            <Typography className={`${classes.text3} links`}>About Us</Typography>
                            <Typography className={`${classes.text3} links`}>Properties</Typography>
                            <Typography className={`${classes.text3} links`}>Careers</Typography>
                            <Typography className={`${classes.text3} links`}>Blog</Typography>
                            <Typography className={`${classes.text3} links`}>Contact</Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Typography className={`${classes.text3} links`}>Jagatpura</Typography>
                            <Typography className={`${classes.text3} links`}>Ajmer Road</Typography>
                            <Typography className={`${classes.text3} links`}>Mansarovar</Typography>
                            <Typography className={`${classes.text3} links`}>Tonk Road</Typography>
                            <Typography className={`${classes.text3} links`}>Facility Management</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <Typography className={classes.text1}>NEWSLETTER</Typography>
                    <Typography className={classes.text3}>Subscribe your email to get the latest news and new offer also discount</Typography>
                    <Grid container>
                        <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                            <TextField placeholder="Email Address" style={{ backgroundColor: '#FFFFFF', border: 'none' }} />
                            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 5, backgroundColor: '#FF7601', marginLeft: 8 }}>
                                <SendIcon style={{ color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Typography className={classes.text2}>Follow us on</Typography>
                    <Grid container>
                        <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
                            <Box className={`${classes.socialBox} social_icon`}>
                                <SendIcon style={{ color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                            </Box>
                            <Box className={`${classes.socialBox} social_icon`}>
                                <TwitterIcon style={{ color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                            </Box>
                            <Box className={`${classes.socialBox} social_icon`}>
                                <PinterestIcon style={{ color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                            </Box>
                            <Box className={`${classes.socialBox} social_icon`}>
                                <YouTubeIcon style={{ color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                            </Box>
                            <Box className={`${classes.socialBox} social_icon`}>
                                <LanguageIcon style={{ color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: 40 }} spacing={2}>
                <Grid xs={12} md={2}>
                    <Typography className={classes.text4}>1BHK Flats in Jaipur</Typography>
                </Grid>
                <Grid xs={12} md={2}>
                    <Typography className={classes.text4}>2BHK Flats in Jaipur</Typography>
                </Grid>
                <Grid xs={12} md={2}>
                    <Typography className={classes.text4}>3BHK Flats in Jaipur</Typography>
                </Grid>
                <Grid xs={12} md={2}>
                    <Typography className={classes.text4}>Property/Flats in Jaipur</Typography>
                </Grid>
                <Grid xs={12} md={2}>
                    <Typography className={classes.text4}>Studio Apartments in Jaipur</Typography>
                </Grid>
                <Grid xs={12} md={2}>
                    <Typography className={classes.text4}>Villas in Jaipur</Typography>
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: 40 }} spacing={2}>
                <Grid xs={12} md={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography className={classes.text3}>© 2021 Design by Dzone India Software & Technologies Pvt. Ltd All Right Reserved</Typography>
                </Grid>

            </Grid>

            <Grid container style={{ marginTop: 40 }} spacing={2} className="footerSplit">
                <Mobilefootermenu />
            </Grid>
        </>
    );
}

export default Footer;