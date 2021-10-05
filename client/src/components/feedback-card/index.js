import React, { useEffect } from "react";
import { Typography, Grid, Container, makeStyles, Button, Box } from "@material-ui/core";
import ApiClient from "../../api-client";
import './feedback.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '@material-ui/lab/Rating';

const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    initialSlide: 0,
    draggable: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
};

const useStyles = makeStyles((theme) => ({

}));
const FeedbackCard = props => {
    const classes = useStyles();
    const { name, city, message, rating, image } = props.feedbacks;
    console.log("feedback card props", props);

    let img1 = 'no-image-available-icon-6.png';
    let images2 = ['no-image-available-icon-6.png'];

    if (image) {
        img1 = ApiClient.SERVER_ADDRESS + "/" + image[0].iconImage[0].path;
        let imgs = (image || []).map((img, i) => {
            return ApiClient.SERVER_ADDRESS + "/" + img.path;
        });
        images2 = ApiClient.SERVER_ADDRESS + "/" + image[0].image[0].path;;
        console.log("needed images", imgs);
    }

    return (
        <Box className="feedback-wrap">
            <Box className="feedback-image"><img src={img1} /></Box>
            <Rating name="half-rating-read" defaultValue={0} precision={0.5} value={rating} readOnly />
            <Typography style={{ color: 'orange', marginBottom: 20 }}><b>{name}</b></Typography>
            <Typography>{''}</Typography>
            <Box className="feedback-title">{name} <span>{city}</span></Box>
            <Box className="feedback-property-image" >
                {/* <img src={img1} style={{height: 200}} /> */}
                <Slider {...settings1}>

                    {(images2 || []).map(imgPath => {

                        return <Box className="property-image-thumb">
                            <img src={imgPath} alt="" />
                        </Box>;
                    })}
                </Slider>

            </Box>

            <Box className="feedback-message">{message}</Box>
        </Box>
    );
};

export default FeedbackCard;