import React, {useEffect} from "react";
import {Typography, Grid, Container, makeStyles, Button, Box} from "@material-ui/core";
import ApiClient from "../../api-client";

const useStyles = makeStyles((theme) => ({
    text1: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#FF7600',
        fontSize: 17,
        marginTop: 10,
        fontWeight: 'bold'
    },
    text2: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#949494',
        fontSize: 14,
        marginBottom: 10,
    },
    text3: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 15,
    },
    box: {
        width: 350,
        backgroundColor: 'transparent'
    },
    boxInner: {
        width: 350,
        backgroundColor: '#FFFFFF',
        marginTop: -40,
        zIndex: -1,
        paddingTop: 40,
        paddingBottom: 20,
        borderRadius: 5,
    },
}));
const FeedbackCard = props => {
    const classes = useStyles();
    const {name, message, ratings, img1Path, img2Path} = props;

    let img1 = 'no-image-available-icon-6.png';
    let img2 = 'no-image-available-icon-6.png';

    if (img1Path) {
        img1 = ApiClient.SERVER_ADDRESS + "/" + img1Path;
        img2 = ApiClient.SERVER_ADDRESS + "/" + img2Path;
    }

    return (
        <Box className={classes.box} style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <img src={img1} style={{width: 80, height: 80, borderRadius: 40}} />
            <Box className={classes.boxInner}>
                <Grid container>
                    <Grid item style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20}}>
                        <Typography className={classes.text1}>{name}</Typography>
                        <Box style={{paddingLeft: 15, paddingRight: 15}}>
                            <img className={classes.property} src={img2} style={{width: '100%', height: 100}} />
                        </Box>
                        <Typography className={classes.text3}>{message}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default FeedbackCard;