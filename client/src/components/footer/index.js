import React, { useEffect, useState } from "react";
import { Typography, Grid, Container, makeStyles, Button, Box, TextField, IconButton } from "@material-ui/core";
import './footer.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SendIcon from '@material-ui/icons/Send';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import Mobilefootermenu from '../footer/footermobile';
import ApiClient from "../../api-client";
import './footer.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

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
    const [footerDetails, setFooterDetails] = useState({});
    const [socialLinks, setSocialLinks] = useState({});
    useEffect(() => {
        populateFooterDetails();
        populateSocialMediaLinks();
    }, []);

    const populateSocialMediaLinks = () => {

        const getData = async () => {
            const response = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, '/home/getFooterSocialMedia', {}, {}, { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization }, false);
            setSocialLinks(response.data);
            localStorage.setItem('social-links', JSON.stringify(response.data));
            console.log('populateSocialMediaLinks details', response.data);
        };
        getData();

    };
    const populateFooterDetails = () => {

        const getData = async () => {
            const response = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, '/home/getFooterAddress', {}, {}, { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization }, false);
            setFooterDetails(response.data);
            localStorage.setItem('company_detials', JSON.stringify(response.data));
            // console.log('populateFooterDetails details', response);
        };
        getData();

    };

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <Typography className={classes.text1}>VISHAL CONSTRUCTION</Typography>
                    <Grid contaienr>
                        <Grid item xs={12} md={12} className={classes.footer_column1}>
                            <LocationOnIcon style={{ color: '#06AEB8', fontSize: 20, padding: 0, marginRight: 8 }} />
                            <Typography className={classes.text3}>{footerDetails?.adress} {footerDetails?.city} {footerDetails?.state} - {footerDetails?.pinCode}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} className={classes.footer_column1}>
                            <PhoneIphoneIcon style={{ color: "#06AEB8", fontSize: 20, padding: 0, marginRight: 8, }} />
                            <Typography className={classes.text3}>{footerDetails?.mobile}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} className={classes.footer_column1}>
                            <MailOutlineIcon style={{ color: "#06AEB8", fontSize: 20, padding: 0, marginRight: 8, }} />
                            <Typography className={classes.text3}>{footerDetails?.email}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} className={classes.footer_column1}>
                            <AccessTimeIcon style={{ color: "#06AEB8", fontSize: 20, padding: 0, marginRight: 8, }} />
                            <Typography className={classes.text3}>{footerDetails?.timming}</Typography>
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
                                <a href={socialLinks?.send}>
                                    <SendIcon style={{ color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                                </a>
                            </Box>
                            <Box className={`${classes.socialBox} social_icon`}>
                                <a href={socialLinks?.twitter}>
                                    <TwitterIcon style={{ color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                                </a>
                            </Box>
                            <Box className={`${classes.socialBox} social_icon`}>
                                <a href={socialLinks?.pinterest}>
                                    <PinterestIcon style={{ color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                                </a>
                            </Box>
                            <Box className={`${classes.socialBox} social_icon`}>
                                <a href={socialLinks?.youtube}>
                                    <YouTubeIcon style={{ color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                                </a>
                            </Box>
                            <Box className={`${classes.socialBox} social_icon`}>
                                <a href={socialLinks?.language}>
                                    <LanguageIcon style={{ color: '#FFFFFF', fontSize: 20, padding: 0, }} />
                                </a >
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
        </div>
    );
};

export default Footer;;