import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/HomeOutlined';
import Phone from '@material-ui/icons/Phone';
import Sell from '@material-ui/icons/LocalOfferOutlined';
import Rent from '@material-ui/icons/ApartmentOutlined';
import Visit from '@material-ui/icons/MyLocationOutlined';

const useStyles = makeStyles({
    footermenu: {
        backgroundColor: '#FF7601',
        width: '100%',
        position: 'fixed', bottom: 0, left: 0,

        '& .MuiBottomNavigationAction-root': {
            minWidth: 'auto',
        },
        '& .MuiBottomNavigationAction-root.Mui-selected': {
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
    },
    TextbottomMenuColor: {color: "white"},


});


export default function Mobilefootermenu() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log("new Value", newValue);
        if (newValue === "+91-9571647680") {
            window.open("tel:+1800229933");
        }
    };

    return (
        <BottomNavigation showLabels value={value} onChange={handleChange} className={classes.footermenu} >
            <BottomNavigationAction label="Home" value="home" icon={<Home />} component={Link} to="/" className={classes.TextbottomMenuColor} />
            <BottomNavigationAction label="Call" value="+91-9571647680" icon={<Phone />} className={classes.TextbottomMenuColor} />
            <BottomNavigationAction label="Sell" value="/sell" icon={<Sell />} component={Link} to="/search-property-details?type=Sell" className={classes.TextbottomMenuColor} />
            <BottomNavigationAction label="Rent" value="/rent" icon={<Rent />} component={Link} to="/search-property-details?type=Rent" className={classes.TextbottomMenuColor} />
            <BottomNavigationAction label="Visit" value="Visit" icon={<Visit />} component={Link} to="/" className={classes.TextbottomMenuColor} />
        </BottomNavigation>
    );
}
