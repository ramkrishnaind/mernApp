import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import './section-map.css';
import './map_form.css';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
    primary: {
        backgroundColor: '#ef8822',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: '#00b0b8',
        },
    },


}));



const MapForm = () => {
    const classes = useStyles();
    // create state variables for each input
    const [search, setSearch] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        // handleClose();
    };

    const cities = [

        {
            value: '',
            label: '',
        },
        {
            value: 'Jaipur',
            label: 'Jaipur',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    const states = [
        {
            value: '',
            label: '',
        },
        {
            value: 'Rajesthan',
            label: 'Rajesthan',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    return (
        <form className={`${classes.root} map-form`} onSubmit={handleSubmit}>
            <label for="search" >Search</label>
            <TextField
                className="form-group"
                label="Search"
                variant="filled"
                required
                value={search}
                onChange={e => setSearch(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <label for="city" >City</label>
            <TextField
                className="form-group"
                id="city"
                select
                label="City"
                value={city}
                onChange={e => setCity(e.target.value)}
                //helperText="Please select City"
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
            >
                {cities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <label for="states" >State</label>
            <TextField
                className="form-group"
                id="states"
                select
                label="State"
                value={state}
                onChange={e => setState(e.target.value)}
                //helperText="Please select State"
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
            >
                {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <div className="form-btn">
                <Button className={classes.primary} type="submit" variant="contained" color="primary">
                    Search
                </Button>
            </div>
        </form>
    );
};

export default MapForm;