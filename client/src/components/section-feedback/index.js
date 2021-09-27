import React, {useEffect, useState} from "react";
import {Typography, Grid, Container, makeStyles, Button, Box} from "@material-ui/core";
import './section-feedback.css';
import SectionHeader from "../section-header";
import APP_CONSTANTS from "../../constants/app-constants";
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import FeedbackCard from "../feedback-card";
import ApiClient from '../../api-client/index';


const useStyles = makeStyles((theme) => ({

}));

const options = {
    margin: 50,
    responsiveClass: true,
    loop: false,
    nav: false,
    dots: true,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
            margin: 10,
        },
        576: {
            items: 2,
            margin: 15,
        },
        768: {
            items: 2,
            margin: 20,
        },
        992: {
            items: 3,
        }
    },
};

const getFeedbackUi = (feedbackData) => {
    const newList = (feedbackData?.list || []).map(({name, message, rating, image}, i) => {
        return <div key={i}>
            <FeedbackCard key={i + 5000} name={name} img1Path={image.length >= 2 && image[0].path ? image[0].path : null} img2Path={image.length >= 2 && image[1].path ? image[1].path : null} message={message} rating={rating} />
        </div>;
    });
    // console.log("feedbakc list", newList, feedbackData);
    return newList.slice();
};

const SectionFeedback = props => {
    const classes = useStyles();

    const [feedbacks, setFeedbacks] = useState({list: []});
    useEffect(() => {
        const cookie = 'connect.sid=s%3AOTR7JRcRLkCbykuoWLRX4yOvqEZu20Is.4utrypcpaXicNe3A0foHiWeVNP8fQDryd6%2FdCibio%2BI';
        const authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.VmlrcmFtSmVldFNpbmdoSkk.MaACpq-fK6F02rVz3vEAUgAYvTqDAEVKpq9zNbmWCPs';
        populateFeedbackInfo(cookie, authorization);
    }, []);

    const populateFeedbackInfo = (cookie, authorization) => {
        const getData = async () => {
            const response = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, '/feedback/getFeedbackRequest', {}, {}, {Cookie: cookie, Authorization: authorization}, false);

            console.log("feedbackin data ", response.data.list);
            setFeedbacks(response?.data || {list: []});
        };
        getData();
    };

    return (
        <>
            <SectionHeader title={APP_CONSTANTS.section_feedback_title} subtitle={APP_CONSTANTS.section_feedback_subtitle} style={{color: '#FFFFFF'}} />
            <div className="feedback-wrapper">
                <OwlCarousel className='owl-theme' {...options}>
                    {getFeedbackUi(feedbacks)}
                </OwlCarousel>
            </div>
        </>
    );

};

export default SectionFeedback;