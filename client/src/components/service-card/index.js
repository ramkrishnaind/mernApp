import React, {useEffect} from "react";
import { Typography, Grid, Container, makeStyles, Button, Box } from "@material-ui/core";
import "./service-card.css";

const ServiceCard = props => {

    return (
        <div className="portfolio-item" >
            <figure>
                <img className="img pulse" src={process.env.PUBLIC_URL + '/property_img3.jpeg'} style={{width: '100%'}} />
                <div className="mask">
                    <h2>RENT</h2>
                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    <a href="#" class="info">Read More</a>
                </div>
            </figure>
        </div>
    );
}

export default ServiceCard;