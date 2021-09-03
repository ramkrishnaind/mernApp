import Grid from '@material-ui/core/Grid';
import {makeStyles, Button, Box} from '@material-ui/core';
import "./online-form.css";
import TextField from '@material-ui/core/TextField';
import SectionHeader from '../section-header';
import APP_CONSTANTS from '../../constants/app-constants';
import {useEffect, useState} from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function OnlineBooking() {
    const classes = useStyles();
    const [state, setState] = useState({
        name: '',
        email: '',
        phoneno: '',
        pan: '',
        country: '',
        city: '',
        pin: '',
        bankingAmount: ''
    });

    useEffect(() => {

        let userDetails = localStorage.getItem('user');
        console.log('userData', userDetails);
        if (userDetails) {
            userDetails = JSON.parse(userDetails);
            setState({
                ...state,
                email: userDetails.email,
                name: userDetails.firstName + userDetails.lastName
            });
            console.log("form state", state);
        }
    }, []);
    return (
        <div class="client-bgform" style={{padding: 20, borderRadius: 20}}>
            <div className={classes.root}>

                <SectionHeader title={APP_CONSTANTS.online_form_title} subtitle={APP_CONSTANTS.online_form_subtitles} />
                <Box className="WholeCont">

                    <Grid container spacing={3}>
                        <Grid item xs={3} className="TextfildGrid">
                            <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                <TextField id="" className="InnerForm" label="Name" variant="outlined" value={state.name} />
                            </form>
                        </Grid>
                        <Grid item xs={3} className="TextfildGrid">
                            <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                <TextField id="" className="InnerForm" label="Email" variant="outlined" value={state.email} />
                            </form>
                        </Grid>
                        <Grid item xs={3} className="TextfildGrid">
                            <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                <TextField id="" className="InnerForm" label="Phone Number" variant="outlined" />
                            </form>
                        </Grid>
                        <Grid item xs={3} className="TextfildGrid">
                            <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                <TextField id="" className="InnerForm" label="Pan Number" variant="outlined" />
                            </form>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={3} className="TextfildGrid">
                            <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                <TextField id="" className="InnerForm" label="Country Name" variant="outlined" />
                            </form>
                        </Grid>
                        <Grid item xs={3} className="TextfildGrid">
                            <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                <TextField id="" className="InnerForm" label="City" variant="outlined" />
                            </form>
                        </Grid>
                        <Grid item xs={3} className="TextfildGrid">
                            <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                <TextField id="" className="InnerForm" label="Pin Code" variant="outlined" />
                            </form>
                        </Grid>
                        <Grid item xs={3} className="TextfildGrid">
                            <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                <TextField id="" className="InnerForm" label="banking Amount" variant="outlined" />
                            </form>
                        </Grid>
                    </Grid>
                    <div className="OutformP" >
                        <p className="formP">
                            I <input type="text" required /> has paid Rs. <input type="text" required /> (in numbers) as against my expression of interest for Flat No. <input type="text" required /> of Project <input type="text" required /> .
                        </p>
                        <p className="formP">
                            <input className="checkBox" type="checkbox" required /> I acknowledge that I have read, understood, and agree to all the <a href="#">Terms & Conditions</a>  mentioned herewith.terms & conditions.
                        </p>
                        <Box className="ParentBookButton">
                            <Button className="BookButton">Book Now</Button>
                        </Box>

                    </div>

                </Box>
            </div>
        </div>
    );
}

