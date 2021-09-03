import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
    footermenu: { position: 'fixed', bottom: 0, left: 0, },
    TextbottomMenuColor: { color: "white" },


});

export default function Mobilefootermenu() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.footermenu} style={{ width: "100%", background: "#FF7601" }} >
            <BottomNavigationAction label="Call" value="+91-9571647680" icon={<PhoneIcon />} className={classes.TextbottomMenuColor} />
            <BottomNavigationAction label="Email" value="info@vishalconstructioncompany.com" icon={<EmailIcon />} className={classes.TextbottomMenuColor} />
            <BottomNavigationAction label="Visit" value="Visit" icon={<PersonPinCircleIcon />} className={classes.TextbottomMenuColor} />
            <BottomNavigationAction label="Login/Signup" value="Login/Signup" icon={<ExitToAppIcon />} className={classes.TextbottomMenuColor} />
        </BottomNavigation>
    );
}
