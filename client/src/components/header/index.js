import React, { useState } from 'react';
import './header.css';
import { Grid, Container, Typography, Button, makeStyles, Box, TextField, NativeSelect } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import APP_CONSTANTS from '../../constants/app-constants';
import MenuItem from '../menu-item';
import menuItems from '../../utils/menu.json';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import Logo from '../../images/logo.png'


import Dialog from '@material-ui/core/Dialog';

import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import '../enquryForm/enquryForm.css'

import { useDispatch } from "react-redux";
import * as SitevisitAction from '../../redux/actions/SitevisitAction';


const stylessd = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "#FFFFFF !important",
    }
});

const DialogTitle = withStyles(stylessd)((props) => {
    const { children, classes, onClose, ...other } = props;


    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
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
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [time, setTime] = useState("");

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleData = (e) => {
        const formData = {
            name: name,
            email: email,
            phone: mobile,
            time: time,
            // type: type,
            // propertyname: propertyname,
        };
        console.log('formData', formData);
        dispatch(SitevisitAction.SitevisitRequestAsync(formData));
        // toast.success('Request Sent successfully', { position: toast.POSITION.TOP_RIGHT, autoClose: 5000 })
        setName('')
        setMobile('')
        setEmail('')
        setTime('')
        setOpen(false);
    };


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Grid container className="MainMenu">
                <Box className="logoImage">
                    <img src={Logo} />
                </Box>
                <Grid item xs={12} md={12} className="bg-green">
                    <Container>
                        <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, paddingBottom: 8 }}>
                            <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <PhoneIcon className={classes.icon} />
                                <Typography className={classes.contact}>{APP_CONSTANTS.phoneNumber}</Typography>
                                <MailOutlineIcon className={classes.icon} />
                                <Typography className={classes.contact}>{APP_CONSTANTS.email}</Typography>
                            </Grid>
                            <Grid item style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                                <Button variant="contained" className={`${classes.btn1} btn-book-online`} component={RouterLink} to="/book-online">
                                    {APP_CONSTANTS.btnBookOnlineText}
                                </Button>
                                <Button variant="contained" className={classes.btn2} onClick={handleClickOpen}
                                >
                                    {APP_CONSTANTS.btnRegisterASiteVisit}
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid item xs={12} md={12} className="bg-white">
                    <Container>
                        <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, paddingBottom: 8 }}>
                            <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                {menuItems.map(menu => {
                                    return <MenuItem menu={menu} />
                                })}
                            </Grid>
                            <Grid item style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                                <Button variant="outlined" className={classes.btn3} component={RouterLink} to="/post-property">
                                    Post Property
                                </Button>
                                <Button variant="outlined" className={classes.btn4} component={RouterLink} to="/signin">
                                    Login / Signup
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className="EnquryFormData">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {APP_CONSTANTS.titleSiteVisit}
                </DialogTitle>
                <Box className="emiForm">
                    <TextField
                        className="EmiInputs"
                        style={{ marginTop: 15 }}
                        variant="outlined"
                        label="Your Name"
                        name="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline
                            }
                        }}
                        InputLabelProps={{
                            style: { color: '#FFFFFF' }
                        }}
                        fullWidth >
                    </TextField>
                    <TextField
                        className="EmiInputs"
                        style={{ marginTop: 15 }}
                        variant="outlined"
                        label="Email Address"
                        type="email"
                        name="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline
                            }
                        }}
                        InputLabelProps={{
                            style: { color: '#FFFFFF' }
                        }}
                        fullWidth >
                    </TextField>
                    <TextField
                        className="EmiInputs"
                        style={{ marginTop: 15 }}
                        variant="outlined"
                        label="Phone Number"
                        name="Phone"
                        type="tel"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline
                            }
                        }}
                        InputLabelProps={{
                            style: { color: '#FFFFFF' }
                        }}
                        fullWidth >
                    </TextField>
                    <NativeSelect className="EmiInputs selectInput"
                        onChange={(e) => setTime(e.target.value)}
                        fullWidth>
                        <option value="">Choose Time</option>
                        <option value="8:00 AM">8:00 AM</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 AM">12:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                    </NativeSelect>
                </Box>
                <DialogActions>
                    <Box className="ParentButton">
                        <Button onClick={(e) => handleData(e)}>
                            Submit
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>

        </>
    );
}

export default withRouter(Header);