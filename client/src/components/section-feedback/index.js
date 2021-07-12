import React, {useEffect} from "react";
import { Typography, Grid, Container, makeStyles, Button, Box } from "@material-ui/core";
import './section-feedback.css';
import SectionHeader from "../section-header";
import APP_CONSTANTS from "../../constants/app-constants";
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import FeedbackCard from "../feedback-card";

const useStyles = makeStyles((theme)=> ({
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

  const SectionFeedback = props => {
    const classes = useStyles();
    const {items} = props;

    return (
            <>
                <SectionHeader title={APP_CONSTANTS.section_feedback_title} subtitle={APP_CONSTANTS.section_feedback_subtitle} style={{color: '#FFFFFF'}} />
                <div style={{marginTop: 40}}>
                <OwlCarousel items={3} className="owl-theme" loop nav={true} margin={8} autoplay ={true} dots={true}>
                    {items.map(feedback => {
                        const {name, message, city, rating} = feedback;
                        return (
                            <div>
                                <FeedbackCard name={name} city={city} message={message} rating={rating} />
                            </div>
                        );
                    })}
                </OwlCarousel>
                </div>
            </>
    );

}

export default SectionFeedback;