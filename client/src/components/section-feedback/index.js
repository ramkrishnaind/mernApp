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



const getFeedbackUi = (feedbackData) => {
    const newList = feedbackData.list.map(({name, message, rating, image}, i) => {
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
            <div style={{marginTop: 40}}>
                <OwlCarousel items={3} className="owl-theme" loop nav={true} margin={8} autoPlay={true} dots={true}>
                    {getFeedbackUi(feedbacks)}
                </OwlCarousel>
            </div>
        </>
    );

};

export default SectionFeedback;