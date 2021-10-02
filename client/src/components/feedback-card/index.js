import React, { useEffect } from "react";
import { Typography, Grid, Container, makeStyles, Button, Box } from "@material-ui/core";
import ApiClient from "../../api-client";
import './feedback.css';

const useStyles = makeStyles((theme) => ({

}));
const FeedbackCard = props => {
    const classes = useStyles();
    const { name, message, ratings, img1Path, img2Path } = props;

    let img1 = 'no-image-available-icon-6.png';
    let img2 = 'no-image-available-icon-6.png';

    if (img1Path) {
        img1 = ApiClient.SERVER_ADDRESS + "/" + img1Path;
        img2 = ApiClient.SERVER_ADDRESS + "/" + img2Path;
    }

    return (
        <Box className="feedback-wrap">
            <Box className="feedback-image"><img src={img1} /></Box>
            {/* <Box className="feedback-title">{name} <span>Jaipur</span></Box> */}
            <Box className="feedback-property-image"><img src={img2} /></Box>
            <Box className="feedback-message">{message}</Box>
        </Box>
    );
};

export default FeedbackCard;