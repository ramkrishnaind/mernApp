import React from "react";
import {
  Typography,
  makeStyles,
  Grid,
  Box,
  Menu,
  MenuItem as DropdownMenu,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import {useHistory, Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menu: {
    padding: 0,
    color: "#000000",
    marginRight: 15,
    fontFamily: '"Open Sans",sans-serif',
    fontWeight: 400,
    cursor: "pointer",
  },
  menuWithSubmenu: {
    padding: 0,
    color: "#000000",
    fontFamily: '"Open Sans",sans-serif',
    fontWeight: 400,
    cursor: "pointer",
  },
  icon: {
    marginRight: 10,
    width: 20,
    height: 20,
    color: "#FF7601",
  },
}));

const MenuItem = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const classes = useStyles();
  let hasSubmenu = false;
  const {title, submenu, id, href} = props.menu || {};
  if(submenu) {
    hasSubmenu = true;
  }
  const menuStyle = hasSubmenu ? classes.menuWithSubmenu : classes.menu;

  const _renderAboutUsSubmenu = () => {
    return (
        <Grid container>
            <Grid item={12}>
                {submenu.map(sm => <DropdownMenu onClick={handleClose}>{sm.title}</DropdownMenu>)}
            </Grid>
        </Grid>
    );
  }

  const _renderServicesSubmenu = () => {
      const [activeIndex, setActiveIndex] = React.useState(0);
      const onSubmenuClickListener = index => {
          setActiveIndex(index);
      }
    return (
        <Grid container spacing={0} style={{width: 600, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
            <Grid item md={3} className="services-submenu-bg">
                {submenu.map((sm, idx) => {
                    const mStyle = idx === activeIndex ? {color: '#FF7601', backgroundColor: '#FFFFFF', fontFamily: '"Open Sans",sans-serif'}: {color: '#FFFFFF', fontFamily: '"Open Sans",sans-serif'};
                    return <DropdownMenu style={mStyle} onClick={() => onSubmenuClickListener(idx)}>{sm.title}</DropdownMenu>;
                })}
            </Grid>
            <Grid item md={6} style={{padding: 10}}>
                <Grid container>
                    <Grid item md={6} style={{display: 'flex', flexDirection: 'column'}}>
                        <Typography>COMMERCIAL</Typography>
                        {submenu[activeIndex].commercial.map(cm => <DropdownMenu>{cm.title}</DropdownMenu>)}
                    </Grid>
                    <Grid item md={6} style={{display: 'flex', flexDirection: 'column'}}>
                        <Typography>RESIDENTIAL</Typography>
                        {submenu[activeIndex].residential.map(cm => <DropdownMenu>{cm.title}</DropdownMenu>)}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={3} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 8}}>
                <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} style={{width: 100, height: 100}} /> 
            </Grid>
        </Grid>
    );
  }

  const _renderPropertySubmenu = () => {
      return (
          <Grid container spacing={0} style={{width: 400, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Grid item md={8}>
                  {submenu.map(sm => <DropdownMenu onClick={() => handleClose(sm)}>{sm.title}</DropdownMenu>)}
              </Grid>
              <Grid item md={4} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 8}}>
                  <img src={process.env.PUBLIC_URL + '/property_img3.jpeg'} style={{width: 100, height: 100}} /> 
              </Grid>
          </Grid>
      );
  }

  const _renderSubmenu = menuId => {
      switch (menuId) {
          case 2:
              return _renderAboutUsSubmenu();
          case 3:
            return _renderServicesSubmenu();
          case 4:
            return _renderPropertySubmenu();
      }
  }

  const _renderIcon = () => {
    if (hasSubmenu) {
      return isOpen ? (
        <CloseIcon className={classes.icon} />
      ) : (
        <ExpandMoreIcon className={classes.icon} />
      );
    }
    return null;
  };

  const onMenuClickListener = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(!isOpen);
  };

  const handleClose = (menu) => {
    setAnchorEl(null);
    setIsOpen(!isOpen);
    history.push(menu.href);
  };

  return (
      <>
    <Box onClick={onMenuClickListener} aria-controls="menu" m={0}>
      <Grid
        container
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography className={menuStyle} component={RouterLink} to={href}>{title}</Typography>
        {_renderIcon()}
      </Grid>
    </Box>
    {hasSubmenu && <Menu
        style={{marginTop: 85, padding: 0}}
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {_renderSubmenu(id)}
      </Menu>}
    </>
  );
};

export default MenuItem;
