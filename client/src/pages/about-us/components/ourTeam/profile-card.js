import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {
    Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        height: 160,
        width: 160,
        borderRadius: "50%"
    },
    textCenter: {
        textAlign: 'center'
    },
    text1: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#06AEB8',
        fontWeight: 600,
        fontSize: 16,


    },
    text2: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#FF7601',
        fontWeight: 400,
        fontSize: 36,
        marginBottom: 30
    },
    text3: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#666666',
        fontSize: 14,
        marginBottom: 20,
        lineHeight: '1.8',
        marginTop: 10
    },
    text4: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#FECE10',
        fontSize: 51,
        marginTop: 20,
        fontWeight: 'bold',
    },
    text5: {
        fontFamily: '"Open Sans",sans-serif',
        color: '#FFFFFF',
        fontSize: 19,
        // marginTop: 20,
        fontWeight: 400,
    },
}));

export default function ProfileCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root} style={{margin: 20}}>

            <Box style={{display: 'flex', justifyContent: 'center'}}>
                <img src={"/client_1.jpg"} className={classes.avatar} alt='' />
            </Box>
            <CardContent>
                <Typography className={[classes.textCenter, classes.text1]} variant="body2" color="textSecondary" component="p">
                    Vishal Construction
                </Typography>
                <Typography className={[classes.textCenter, classes.text3]}>

                    This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.
                </Typography>
            </CardContent>
            <CardActions disableSpacing style={{justifyContent: 'center'}}>
                <IconButton aria-label="fb">
                    <FacebookIcon />
                </IconButton>
                <IconButton aria-label="in">
                    <LinkedInIcon />
                </IconButton>
                <IconButton aria-label="twitter">
                    < TwitterIcon />
                </IconButton>

            </CardActions>
        </Card>
    );
}