import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavItem2 from '../nav-item2';

import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
    BarChart as BarChartIcon,
    ShoppingBag as ShoppingBagIcon,
    User as UserIcon,
    Users as UsersIcon
  } from 'react-feather';
import {useSelector} from 'react-redux';
import Logger from '../../utils/Logger';

  const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    jobTitle: 'Vishal Properties',
    name: 'Admin'
  };
  
  const items = [
    {
      href: '/home',
      icon: BarChartIcon,
      title: 'Dashboard'
    },

    {
      href: '/menu',
      icon: UsersIcon,
      title: 'Menu Management',
      items: [
        {
          href: "/menu/add",
          icon: ShoppingBagIcon,
          title: "Add Menu",
        },
        {
          href: "/menu",
          icon: ShoppingBagIcon,
          title: "Menu List",
        }
      ]
    },

    {
      href: '/property-management',
      icon: UsersIcon,
      title: 'Property Management',
      items: [
        {
          href: "/add-property",
          icon: ShoppingBagIcon,
          title: "Add New",
        },
        {
          href: "/property-list",
          icon: ShoppingBagIcon,
          title: "Property List",
        }
      ]
    },
    {
      href: '/user-management',
      icon: ShoppingBagIcon,
      title: 'User Management'
    },
    {
      href: '/account',
      icon: UserIcon,
      title: 'Account'
    },
  ];

  const DashboardSidebar = ({ onMobileClose, openMobile }) => {
    const location = useLocation();

  const sidemenuList = useSelector(state => state.SideMenuList.data);

  Logger.log('SIDEMENU-LIST', sidemenuList);

    useEffect(() => {
        if (openMobile && onMobileClose) {
          onMobileClose();
        }
      }, [location.pathname]);
    
      const content = (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              p: 2
            }}
          >
            <Avatar
              component={RouterLink}
              src={user.avatar}
              sx={{
                cursor: 'pointer',
                width: 64,
                height: 64
              }}
              to="/home"
            />
            <Typography
              color="textPrimary"
              variant="h5"
            >
              {user.name}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {user.jobTitle}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <List>
              {items?.map((item, index) => (
                <NavItem2
                  href={item.href}
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  items={item.items}
                />
              ))}
            </List>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Box>
      );
    
      return (
        <>
          <Hidden only={["lg"]}>
            <Drawer
              anchor="left"
              onClose={onMobileClose}
              open={openMobile}
              variant="temporary"
              PaperProps={{
                sx: {
                  width: 256
                }
              }}
            >
              {content}
            </Drawer>
          </Hidden>
          <Hidden only={["xs","sm", "md"]}>
            <Drawer
              anchor="left"
              open
              variant="persistent"
              PaperProps={{
                sx: {
                  width: 256,
                  top: 64,
                  height: 'calc(100% - 64px)'
                }
              }}
            >
              {content}
            </Drawer>
          </Hidden>
        </>
      );
  }

  DashboardSidebar.propTypes = {
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
  };
  
  DashboardSidebar.defaultProps = {
    onMobileClose: () => { },
    openMobile: false
  };
  
  export default DashboardSidebar;