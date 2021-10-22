import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {withRouter, Link as RouterLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../../../images/vishal-logo.png";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function Mobilemenu() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [submenuVisble, setSubmenuVisible] = useState(0);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {[{
                    "id": 1,
                    "title": "Home",
                    "href": "/"
                },
                {
                    "id": 2,
                    "title": "About Us",
                    "href": "/about-us",
                    "submenu": [
                        {
                            "title": "About The Company",
                            "href": "/about-us"
                        },
                        {
                            "title": "About The Directors",
                            "href": "/about-directors"
                        },
                        {
                            "title": "Invest With Us",
                            "href": "/invest-with-us"
                        },
                        {
                            "title": "Construction Process",
                            "href": "/construction-process"
                        }
                    ]
                }, {
                    "id": 3,
                    "title": "Sell",
                    "href": "/search-property-details?type=Sell"
                },
                {
                    "id": 4,
                    "title": "Rent",
                    "href": "/search-property-details?type=Rent"
                },
                // {
                //     "id": 5,
                //     "title": "Services",
                //     "image": "",
                //     "submenu": []
                // },
                {
                    "id": 6,
                    "title": "Careers",
                    "href": "/carrer"
                },
                {
                    "id": 7,
                    "title": "Finance",
                    "href": "/finance"
                },
                {
                    "id": 8,
                    "title": "Contact Us",
                    "href": "/contact-us"
                },
                {
                    "id": 9,
                    "title": "Blog",
                    "href": "/blog"
                }].map(({id, title, href, submenu}, index) => {

                    if (submenu) {
                        return submenu.map(({id, title, href, submenu}, i) => {
                            return <ListItem button key={id} component={RouterLink} to={href}>
                                <ListItemIcon>{(i + 1) % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={title} />
                            </ListItem>;
                        });
                    }


                    return <ListItem button key={id} component={RouterLink} to={href}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={title} />
                    </ListItem>;
                })}
            </List>
            <Divider />


        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div className="fullWidthheader">
                        <div className="blackRowheader PL">
                            <a href="/"><img src={logo} alt="Logo" className="mobilelogoWidth" /></a>
                            <div className="humbergIcon">
                                <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                    {list(anchor)}
                                </Drawer>
                            </div>
                        </div>
                        <div className="completeRow">

                            <div className="headerRight_part">
                                <Button className="btn_Bookonline" component={RouterLink} to="/book-online"> Book Online</Button> &nbsp;&nbsp;
                                <Button className="btn_Postonline" component={RouterLink}
                                    to="/post-property"> Post Property</Button>
                            </div>
                        </div>

                    </div>




                </React.Fragment>
            ))}
        </div>
    );
}