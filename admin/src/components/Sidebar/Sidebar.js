import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  RestaurantMenuRounded,
  AirplayRounded,
  CategoryRounded,
  SupervisedUserCircle,
  PeopleOutlineRounded,
  ShoppingCartRounded,
  RateReviewRounded,
  ArrowBack as ArrowBackIcon,
  FingerprintRounded,
} from "@material-ui/icons";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import MemoryIcon from "@material-ui/icons/Memory";
import WrapTextIcon from "@material-ui/icons/WrapText";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import BallotIcon from "@material-ui/icons/Ballot";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import StarBorder from "@material-ui/icons/StarBorder";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// styles
import useStyles from "./styles";
// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import { connect } from "react-redux";
//import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  {
    id: 0,
    label: "Dashboard",
    link: "/app/dashboard",
    icon: <HomeIcon />,
    value: "dashboard",
  },
  {
    id: 1,
    label: "Admin Management",
    link: "/app/admin",
    icon: <WbIncandescentIcon />,
    value: "admin",
  },
];

function Sidebar(props) {
  let { authentication, location } = props;
  let { user } = authentication;
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  const [selectedPermitRoles, setSelectedPermitRoles] = useState();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  // useEffect(() => {
  //   const permitRoles = user.role && (user.role?.role.map((itr) => {
  //     return structure.find((element) => {
  //       return (element.value === itr)
  //     })
  //   }))
  //   setSelectedPermitRoles(permitRoles)
  // }, [user])

  return (
    <div class="sidebar-area">
      <Drawer
        variant={isPermanent ? "permanent" : "temporary"}
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: isSidebarOpened,
            [classes.drawerClose]: !isSidebarOpened,
          }),
        }}
        open={isSidebarOpened}
      >
        <div className={classes.toolbar} />
        <div className={classes.mobileBackButton}>
          <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
            <ArrowBackIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse
                ),
              }}
            />
          </IconButton>
        </div>
        <List className={classes.sidebarList}>
          {structure?.map((link) => (
            <SidebarLink
              key={link.id}
              location={location}
              isSidebarOpened={isSidebarOpened}
              {...link}
            />
          ))}
        </List>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </Drawer>
    </div>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

function mapStateToProps(state) {
  const { appsetting, authentication } = state;
  console.log("appsettingappsettingappsetting", appsetting);
  return {
    appsetting,
    authentication,
  };
}
export default connect(mapStateToProps)(withRouter(Sidebar));
