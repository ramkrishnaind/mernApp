import React from "react";
import "./service-card.css";
import {makeStyles, Box} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({

    btnBox1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        cursor: 'pointer',
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#FF7601',
        color: '#FFFFFF',
        fontFamily: '"Open Sans",sans-serif',
        fontWeight: 'bold',
    },

}));


const ServiceCard = props => {
    // console.log("segrvice", props);
    const classes = useStyles();
    const {title, description, img} = props.service;
    return (
        <div className="portfolio-item" >
            <figure>
                <img className="img pulse" src={img} alt="" style={{width: '100%', height: 240}} />
                <div className="mask">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Box className={'info'} style={{marginTop: 10}} component={RouterLink} to={
                        {
                            pathname: '/service-details',
                            state: ''
                        }}>
                        MORE DETAIL
                    </Box>
                    {/* <a href="/service-details" className="info" style={{marginTop: 10}} >Read More</a> */}
                </div>
            </figure>
        </div >
    );
};

export default ServiceCard;