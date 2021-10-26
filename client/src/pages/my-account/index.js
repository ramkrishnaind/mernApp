import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, makeStyles, Box, TextField, Button } from '@material-ui/core';
import PageBanner from '../../components/page-banner';
import './my-account.css';

const useStyles = makeStyles((theme) => ({

}));

const MyAccount = (props) => {

  const [name, setName] = useState('user');
  const [email, setEmail] = useState('-');
  const [mobile, setMobile] = useState('-');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setName(user.firstName + " " + user.lastName);
    setEmail(user.email);
    setMobile(user.countryCode + '-' + user.mobile);

  }, []);


  return (
    <div>
      <PageBanner
        bgImage={'/about_us.jpeg'}
        title="My Acount"
        currentPage="My Account"
      />

      <Container>
        <Box className="content-wrapper">
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} className="sidebar-section">
              <Box className="box-item">
                <Box className="box-wrap box-border-bottom box-radius">
                  <Box className="user-intro box-body">
                    <Box className="user-icon">  <img src="images/profile-img.jpg" alt="" /> </Box>
                    <Box className="user-info">
                      <h4> {name}</h4>
                      <p>Permium</p>
                    </Box>
                  </Box>
                  <Box className="box-body p-0">
                    <ul className="sidebar-account-menu">
                      <li className="active"><Link to="/my-account"> <i className="fas fa-house-user"></i>My Account </Link> </li>
                      <li> <Link to="/my-profile"> <i className="far fa-user"></i>My Profile </Link> </li>
                      <li> <Link to="/my-property"> <i className="fas fa-building"></i>My Property </Link> </li>
                      <li> <Link to="/my-booking"> <i className="far fa-list-alt"></i>My Booking </Link> </li>
                      <li> <Link to="my-favorite"> <i className="far fa-heart"></i>My Favorite </Link> </li>
                      <li> <Link className="logout" to="#"><i className="fas fa-sign-out-alt"></i>Log out</Link> </li>
                    </ul>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* <!-- sidebar-section --> */}
            <Grid item xs={12} md={9} className="content-area">
              <Box className="content-section">
                <Box className="box-item">
                  <Box className="box-wrap box-border-bottom box-radius">
                    <Box className="box-header"><h5 className="box-title">Profile Information</h5></Box>
                    <Box className="box-body">
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                          <Box className="myaccount-profileimg">
                            <img src="../images/profile-img.jpg" alt="" />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Box className="myccount-content">
                            <p>Hello {name}!</p>
                            <p><strong>User Name : </strong>{name}</p>
                            <p><strong>Your Name : </strong>{name}</p>
                            <p><strong>Email : </strong>{email}</p>
                            <p><strong>Phone : </strong>{mobile}</p>
                          </Box>
                        </Grid>
                      </Grid>
                      <hr />
                      <Box align="right">
                        <a className="btn btn-primary" href="/my-profile">Edit Profile</a>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {/* <!--content-area--> */}
          </Grid>
        </Box>
      </Container>

    </div>
  );
};

export default MyAccount;