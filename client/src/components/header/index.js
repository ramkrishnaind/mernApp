import React from 'react';
import './header.css';
import {Grid, Container, Typography, Button, makeStyles} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import APP_CONSTANTS from '../../constants/app-constants';
import MenuItem from '../menu-item';
import menuItems from '../../utils/menu.json';
import { withRouter, Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme)=> ({
    contact: {
        padding: 0, 
        color: '#FFFFFF', 
        marginRight: 10, 
        fontFamily: '"Open Sans",sans-serif'
    },
    icon: {
        padding: 0, 
        color: '#FFFFFF', 
        marginRight: 10
    },
    menu: {
        padding: 0, 
        color: '#000000', 
        marginRight: 10, 
        fontFamily: '"Open Sans",sans-serif',
        fontWeight: 400,
        cursor: 'pointer'
    },
    btn1: {
        borderRadius: 15, 
        color: '#FFFFFF', 
        textTransform: 'none', 
        marginRight: 10, 
        fontFamily: '"Open Sans",sans-serif'
    },
    btn2: {
        borderRadius: 15, 
        background: '#FF7601', 
        color: '#FFFFFF', 
        textTransform: 'none', 
        fontFamily: 'Open Sans,sans-serif'
    },
    btn3: {
        borderRadius: 15, 
        background: '#ECECEC', 
        marginRight: 10, 
        color: '#000000', 
        textTransform: 'none', 
        fontFamily: '"Open Sans",sans-serif'
    },
    btn4: {
        borderRadius: 15, 
        color: '#000000', 
        textTransform: 'none', 
        fontFamily: '"Open Sans",sans-serif'
    }
}));
const Header = props => {
    const classes = useStyles();
    return (
        <>
            <Grid container>
                <Grid item xs={12} md={12} className="bg-green">
                    <Container>
                        <Grid container style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, paddingBottom: 8}}>
                           <Grid item style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <PhoneIcon className={classes.icon}/>
                                <Typography className={classes.contact}>{APP_CONSTANTS.phoneNumber}</Typography>
                                <MailOutlineIcon className={classes.icon} />
                                <Typography className={classes.contact}>{APP_CONSTANTS.email}</Typography>
                           </Grid>
                           <Grid item style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                               <Button variant="contained" className={`${classes.btn1} btn-book-online`}>
                                    {APP_CONSTANTS.btnBookOnlineText}
                                </Button>
                               <Button variant="contained" className={classes.btn2} >
                                    {APP_CONSTANTS.btnRegisterASiteVisit}
                                </Button>
                           </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid item xs={12} md={12} className="bg-white">
                    <Container>
                        <Grid container style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, paddingBottom: 8}}>
                           <Grid item style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                               {menuItems.map(menu => {
                                   return <MenuItem menu={menu} />
                               })}
                           </Grid>
                           <Grid item style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                               <Button variant="outlined" className={classes.btn3} component={RouterLink} to="/post-property">
                                    Post Property
                                </Button>
                                <Button variant="outlined" className={classes.btn4}>
                                    Login / Signup
                                </Button>
                           </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
}

export default withRouter(Header);