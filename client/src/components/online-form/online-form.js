import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Container, FormHelperText, Button, Box } from '@material-ui/core';
import "./online-form.css"
import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import SectionHeader from '../section-header';
import SectionTabs from '../section-tabs';
import APP_CONSTANTS from '../../constants/app-constants';



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


    return (
        <div class="client-bgform">
            <div className={classes.root}>
                <Container>
                <SectionHeader title={APP_CONSTANTS.online_form_title} subtitle={APP_CONSTANTS.online_form_subtitles} />
            {/* <SectionTabs tabItems={propertieslist} /> */}
                {/* <Box className="FormHeader">
                            <span className="FormHeaderSpan">
                                THE BEST PLACE TO FIND THE HOUSE YOU WANT
                            </span>
                            <h1 className="FormHeaderH1">ONLINE BOOKING</h1>
                        </Box> */}
                    <Box  className="WholeCont">
                        
                        <Grid container spacing={3} className="onlineFormControl">
                            <Grid item xs={3}>
                                <FormControl className={classes.margin} className="FormControl">
                                    <NativeSelect className="SelectBox"
                                        id="demo-customized-select-native"
                                    // value={age}
                                    // onChange={handleChange}
                                    // input={<BootstrapInput />}
                                    >
                                        {/* <option aria-label="" value="" /> */}
                                        <option value={10}>Select Property Type</option>
                                        <option value={20}>Residential</option>
                                        <option value={30}>Commercial</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl className={classes.margin} className="FormControl">
                                    <NativeSelect className="SelectBox"
                                        id="demo-customized-select-native"
                                    // value={age}
                                    // onChange={handleChange}
                                    // input={<BootstrapInput />}
                                    >
                                        {/* <option aria-label="" value="" /> */}
                                        <option value={10}>Select Property Type</option>
                                        <option value={20}>Flats</option>
                                        <option value={30}>Villa</option>
                                        <option value={30}>Plot</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl className={classes.margin} className="FormControl">
                                    <NativeSelect className="SelectBox"
                                        id="demo-customized-select-native">
                                        <option value={10}>Select Property Name</option>
                                        <option value={20}>Vishal Flats</option>
                                        <option value={30}>Vishal Ultima</option>
                                        <option value={30}>Vishal Avenue</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl className={classes.margin} className="FormControl">
                                    <NativeSelect className="SelectBox"
                                        id="demo-customized-select-native"
                                    // value={age}
                                    // onChange={handleChange}
                                    // input={<BootstrapInput />}
                                    >
                                        {/* <option aria-label="" value="" /> */}
                                        <option value={10}>Select BHK</option>
                                        <option value={20}>1 BHK</option>
                                        <option value={30}>2 BHK</option>
                                        <option value={30}>3 BHK</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={3} className="TextfildGrid">
                                <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                    <TextField id="outlined-basic" className="InnerForm" label="Enter Your Name" variant="outlined" />
                                </form>
                            </Grid>
                            <Grid item xs={3} className="TextfildGrid">
                                <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                    <TextField id="outlined-basic" className="InnerForm" label="Enter Your Email" variant="outlined" />
                                </form>
                            </Grid>
                            <Grid item xs={3} className="TextfildGrid">
                                <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                    <TextField id="outlined-basic" className="InnerForm" label="Enter Your Phone Number" variant="outlined" />
                                </form>
                            </Grid>
                            <Grid item xs={3} className="TextfildGrid">
                                <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                    <TextField id="outlined-basic" className="InnerForm" label="Enter Your Pan Number" variant="outlined" />
                                </form>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={3} className="TextfildGrid">
                                <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                    <TextField id="outlined-basic" className="InnerForm" label="Country Name" variant="outlined" />
                                </form>
                            </Grid>
                            <Grid item xs={3} className="TextfildGrid">
                                <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                    <TextField id="outlined-basic" className="InnerForm" label="Enter Your City" variant="outlined" />
                                </form>
                            </Grid>
                            <Grid item xs={3} className="TextfildGrid">
                                <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                    <TextField id="outlined-basic" className="InnerForm" label="Enter Your Pin Code" variant="outlined" />
                                </form>
                            </Grid>
                            <Grid item xs={3} className="TextfildGrid">
                                <form className={classes.root} className="OutForm" noValidate autoComplete="off">
                                    <TextField id="outlined-basic" className="InnerForm" label="banking Amount" variant="outlined" />
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

                </Container>
            </div>
        </div>
    );
}

