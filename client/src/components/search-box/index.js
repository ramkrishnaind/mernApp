import React, {useState, useEffect} from 'react';
import {makeStyles, Box, Grid} from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import './search-box.css';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Icon} from '@material-ui/core';
import {Link as RouterLink} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ApiClient from '../../api-client';

const Type = {
    RENT: "Rent",
    SELL: "Sell",
    CONSTRUCTION: "Construction",
    INTERIOR: 'Interior'
};
Object.freeze(Type);

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },

    },
}));



const SearchBox = (props) => {
    const classes = useStyles();
    // create state variables for each input
    const [type, setType] = useState(Type.RENT);
    const [pType, setPType] = useState(null);
    const [minAmount, setMinBudget] = useState(null);
    const [maxAmount, setMaxBudget] = useState(null);
    const [keyword, setkeyword] = useState(null);
    const [cityOptions, setCityOptions] = useState(null);


    const handleSubmit = e => {
        // e.preventDefault();
        // handleClose();
        console.log("s");
    };


    useEffect(() => {
        populateCity();
    }, []);

    const populateCity = () => {
        const getData = async () => {
            const response = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, '/property/getSearchTerms', {}, {}, {Cookie: ApiClient.cookie, Authorization: ApiClient.authorization}, false);
            const data = processData(response.data || []);
            setCityOptions(data);
            console.log('setkeyword', response);
        };
        getData();
    };

    const processData = (data) => {
        return data.map((city) => {
            return {label: city};
        });
    };

    const propertyType = [

        {
            value: 'RESIDENTIAL',
            label: 'Residental',
        },
        {
            value: 'COMMERCIAL',
            label: 'Commercial',
        }
    ];

    const minBudget = [
        {
            value: '500000',
            label: '5 Lac',
        },
        {
            value: '1000000',
            label: '10 Lac',
        },
        {
            value: '2000000',
            label: '20 Lac',
        },
        {
            value: '3000000',
            label: '30 Lac',
        },
        {
            value: '4000000',
            label: '40 Lac',
        },
        {
            value: '5000000',
            label: '50 Lac',
        },
    ];

    const maxBudget = [
        {
            value: '500000',
            label: '5 Lac',
        },
        {
            value: '1000000',
            label: '10 Lac',
        },
        {
            value: '2000000',
            label: '20 Lac',
        },
        {
            value: '3000000',
            label: '30 Lac',
        },
        {
            value: '4000000',
            label: '40 Lac',
        },
        {
            value: '5000000',
            label: '50 Lac',
        },
    ];
    console.log("type is ", type);

    return (
        <Box id="search-box" className="search-container">
            <Box className="search-wrapper" style={{height: 'fit-content', margin: 'auto'}} >
                <Grid id="type">
                    <Box className={type === Type.RENT ? 'selected' : ''} onClick={() => setType(Type.RENT)}>RENT</Box>
                    <Box className={type === Type.SELL ? 'selected' : ''} onClick={() => setType(Type.SELL)}> SELL</Box>
                    {/* <Box className={type === Type.CONSTRUCTION ? 'selected' : ''} onClick={() => setType(Type.CONSTRUCTION)} > CONSTRUCTION </Box>
                    <Box className={type === Type.INTERIOR ? 'selected' : ''} onClick={() => setType(Type.INTERIOR)}> INTERIOR</Box> */}
                </Grid>
                <Box id="search-continer" className="search-form">
                    <Box className="search-form-area" >
                        <Grid container spacing={2} >
                            <Grid item xs={6} md={3}>

                                <Autocomplete
                                    disablePortal
                                    id="city-locality"
                                    variant="filled"
                                    options={cityOptions}
                                    onChange={e => setkeyword(cityOptions[e.target.value]?.label)}
                                    // sx={{width: 300}}
                                    renderInput={(params) =>
                                        <TextField
                                            id="city-locality"
                                            variant="filled"
                                            label="City, Locality"

                                            InputProps={{
                                                startAdornment: <InputAdornment position="start" style={{color: "red", marginLeft: -5}}><Icon fontSize="small" style={{color: "#ff7600"}}>room</Icon></InputAdornment>,
                                            }} {...params}
                                        />}
                                />


                                {/* <TextField
                                    id="city-locality"
                                    label="city, locality"
                                    variant="filled"
                                    required
                                    value={keyword}
                                    onChange={e => setkeyword(e.target.value)}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start" style={{color: "red", marginLeft: -5}}><Icon fontSize="small" style={{color: "#ff7600"}}>room</Icon></InputAdornment>,
                                    }}
                                /> */}
                                <Divider className="search-form-divider" orientation="vertical" />
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <TextField
                                    id="property-type"
                                    select
                                    label="Property type"
                                    value={pType}
                                    variant="filled"
                                    onChange={e => setPType(e.target.value)}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start" style={{color: "red", marginLeft: -1}}><Icon fontSize="small" style={{color: "#ff7600"}}>home</Icon></InputAdornment>,
                                    }}

                                >
                                    {propertyType.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <Divider className="search-form-divider" orientation="vertical" />
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <TextField
                                    id="budget"
                                    select
                                    label="Budget(Min Price)"
                                    value={minAmount}
                                    variant="filled"
                                    onChange={e => setMinBudget(e.target.value)}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start" >₹</InputAdornment>,
                                    }}

                                >
                                    {minBudget.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <Divider className="search-form-divider" orientation="vertical" />
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <TextField
                                    id="budget"
                                    select
                                    label="Budget(Max Price)"
                                    value={maxAmount}
                                    variant="filled"
                                    onChange={e => {
                                        setMaxBudget(e.target.value);
                                        console.log("Max budget", e.target.value);
                                    }}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start" >₹
                                        </InputAdornment>,
                                    }}
                                >
                                    {maxBudget.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                        <Grid className="search-form-button">
                            {/* {keyword && pType && maxAmount && minAmount && type ? */}
                            < Button class="mb-search__btn" type="submit" onClick={() => handleSubmit} component={RouterLink} to={{pathname: '/search-property-details', state: {keyword, pType, maxAmount, minAmount, type}}} variant="contained" color="primary">
                                Search
                            </Button>
                            {/* : null */}
                            {/* } */}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
};

export default SearchBox;