import React from "react";
import "./service-card.css";

const ServiceCard = props => {
    console.log("segrvice", props);
    const {title, description, img} = props.service;
    return (
        <div className="portfolio-item" >
            <figure>
                <img className="img pulse" src={img} alt="" style={{width: '100%', height: 240}} />
                <div className="mask">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a href="#" className="info" style={{marginTop: 10}} >Read More</a>
                </div>
            </figure>
        </div >
    );
};

export default ServiceCard;