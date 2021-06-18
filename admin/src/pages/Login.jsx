import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Grid, Avatar, Typography, TextField, Button, FormControlLabel, Checkbox, FormControl, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { logInUser } from '../../axios/api.js';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TnCPdf from '../../tnc.pdf';
import SnackbarContext from '../../context/SnackbarContext';
import sessionContext from '../../context/sessionContext';


const useStyles = makeStyles((theme) => {
    // console.log(theme.spacing(8), theme.spacing(3,0,2),  theme)
    return {
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }
});

const Login = function Login() {
    const history = useHistory();
    const classes = useStyles();

    const requiredText = "Required"
    const { setSnackbar } = useContext(SnackbarContext);
    const { setSessionData } = useContext(sessionContext)

    const [values, setValues] = useState({
        email: '',
        password: '',
        checkBox: false,
        isFieldTouched: {
            email: false,
            password: false,
            checkBox: false
        }
    })

    const handleChange = name => event => {
        let tempValue = name === 'checkBox' ? event.target.checked : event.target.value
        let temp = { ...values.isFieldTouched, [name]: true }
        setValues({ ...values, [name]: tempValue, isFieldTouched: { ...temp } })
    }
    const handleBlurEmail = name => evt => {
        handleChange(name)(evt);
        let isFieldTouched = { ...values.isFieldTouched, email: true };
        setValues({ ...values, emailInvalidMessage: emailValidationFunction(), isFieldTouched });
        console.log(values)
    }

    const loginUser = async (event) => {

        event.preventDefault();
        const user = {
            email: values.email || '',
            password: values.password || '',
        }

        if (validateForm()) {
            console.log('form is valid', user);
            setValues({ ...values, submitLoginDisable: true });
            let data = await logInUser(user)
            setValues({ ...values, submitLoginDisable: false });
            console.log('response data is', data)
            if (data.status) {
                console.log('Login success. LogedIn User is ', data)
                // setSnackbar({ type: "success", active: true, text: data.message, timeout: 6000 });
                setSessionData({ user: data.user });
                history.push('/cashForwardPricing');
            } else {
                console.log('in eles error is', data.message)
                if (data.error && data.validationError) {
                    console.log('Invalid', data.message)
                }
                if (data.error && data.dataIncorrect && data.statusCode === 401) {
                    console.log('Incorrect Data', data.message)
                }
                if (data.error && data.notVerified && data.statusCode === 401) {
                    console.log('Warning Not Verified', data.message)
                }
                if (data.error && data.adminDisable && data.statusCode === 401) {
                    console.log('Admin Disabled Message', data.message)
                }
                setSnackbar({ type: "error", active: true, text: data.message, timeout: 6000 });
            }
        }
        else {
            console.log('Please fill all required fields !')
        }

    }

    const emailValidationFunction = () => {
        if (!values.email) return "";
        let pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(values.email)) {
            return 'Please enter valid email'
        }
        return "";
    }

    const validateForm = () => {
        let validation = {}
        let formIsValid = true

        for (let key in values.isFieldTouched) {
            validation[key] = true;
        }

        if (!values.email || !values.password || !values.checkBox) {
            formIsValid = false;
        }
        if (emailValidationFunction()) {
            formIsValid = false;
        }

        setValues({
            ...values,
            validation: emailValidationFunction(),
            isFieldTouched: validation
        })

        return formIsValid
    }
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log In
                    </Typography>
                    <form className={classes.form} onSubmit={loginUser} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    onBlur={handleBlurEmail('email')}
                                    error={(values.isFieldTouched.email && !values.email) || !!values.emailInvalidMessage}
                                    helperText={values.isFieldTouched.email && !values.email ? `Email ${requiredText}` : values.emailInvalidMessage}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    onBlur={handleChange('password')}
                                    error={values.isFieldTouched.password && !values.password}
                                    helperText={values.isFieldTouched.password && !values.password ? `Password ${requiredText}` : ""}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl required error={values.isFieldTouched.checkBox && !values.checkBox} className={classes.formControl}>
                                    <FormControlLabel
                                        control={<Checkbox value={values.checkBox} onChange={handleChange('checkBox')} color="primary" />}
                                        label={<Link to={TnCPdf} target="_blank">I accept terms and conditions</Link>}
                                    />
                                    <FormHelperText>{values.isFieldTouched.checkBox && !values.checkBox ? `${requiredText} T&C` : ""}</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Log In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/forgot" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>
        </div>
    )

}

export default Login;