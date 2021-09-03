import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import './section-header.css';

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
            value: 'Jaipur',
            label: 'Jaipur',
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

    const states = [
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
        <form className={classes.root} onSubmit={handleSubmit} style={{backgroundColor: '#00afb8e8', padding: 20}}>
            <TextField
                label="Search"
                variant="filled"
                required
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={city}
                onChange={e => setCity(e.target.value)}
                helperText="Please select City"
                variant="outlined"
            >
                {cities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={state}
                onChange={e => setState(e.target.value)}
                helperText="Please select State"
                variant="outlined"
            >
                {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <div>
                <Button variant="contained" onClick={() => { }}>
                    Reset
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Search
                </Button>
            </div>
        </form>
    );
};

export default MapForm;