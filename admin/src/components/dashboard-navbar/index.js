import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import history from "../history";

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {

  function handlelogout() {

    window.localStorage.removeItem("user")
    history.push('/login')
    window.location.reload();
  }

  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <HomeIcon />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <ExitToAppIcon 
          onClick={() => handlelogout()} 
          className="logoutBtn"        
        />
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
    onMobileNavOpen: PropTypes.func
  };
  
  export default DashboardNavbar;