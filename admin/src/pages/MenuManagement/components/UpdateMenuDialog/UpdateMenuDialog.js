import React from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  CssBaseline,
  Grid,
  Typography
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from "../../../../components/Wrappers/Wrappers";



export default function UpdateMenuDialog(props) {

  let { classes, updateformData, updatemenuCreateModal, updatehandleClose, updatehandleChangeInput, updatehandleSubmit 
    ,handleFileLogo,
    handleUploadLogo,
    filesDetails,
    UploadedMainImage,
    handleUploadMainImage,
    handleFileMainImage
  } = props;

  return (
    <Dialog fullScreen open={updatemenuCreateModal} onClose={updatehandleClose} >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={updatehandleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Update Menu
      </Typography>
          <Button color="inherit" onClick={updatehandleClose}>
            Cancel
      </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>


          <div className="card w-100">
            <div class="card-header d-flex justify-content-between align-items-center">
              <Typography component="h1" variant="h5">
                Update Menu
        </Typography>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.submit}
                onClick={updatehandleClose}
              >Back</Button>
            </div>
            <div class="card-body">
              <ValidatorForm
                onSubmit={updatehandleSubmit}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>

                    <TextValidator
                      label="name*"
                      fullWidth
                      variant="outlined"
                      onChange={updatehandleChangeInput}
                      name="name"
                      id="name"
                      value={updateformData.name}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Grid item xs={12} sm={12}>
                      <TextValidator
                        label="image*"
                        fullWidth
                        disabled={true}
                        // onChange={handleChangeInput}
                        name="image"
                        variant="outlined"
                        id="image"
                        value={
                          filesDetails && filesDetails.imageName
                            ? filesDetails.imageName
                            : updateformData.image
                        }
                        validators={["required"]}
                        errorMessages={["this field is required"]}
                      />
                    </Grid>
                    <br />

                    <label htmlFor="logo">
                      <Button color="default" variant="contained" component="span">
                        Browse
                      </Button>
                    </label>
                    <input
                      style={{ display: "none" }}
                      id="logo"
                      name="logo"
                      type="file"
                      onChange={handleFileLogo}
                    />

                    <Button
                      style={{ marginLeft: "20px" }}
                      color="primary"
                      variant="contained"
                      component="span"
                      onClick={() => handleUploadLogo()}
                    >
                      Upload
                    </Button>
                    {/* <Button style={{ marginLeft: '20px' }} color="secondary" variant="contained" component="span" onClick={() => this.handleLogoRemove()}>
                      Remove
                      </Button> */}
                  </Grid> 

                  <Grid item xs={12}>
                    <Grid item xs={12} sm={12}>
                      <TextValidator
                        label="List Image*"
                        fullWidth
                        disabled={true}
                        // onChange={handleChangeInput}
                        name="listImage"
                        variant="outlined"
                        id="listImage"
                        value={
                          UploadedMainImage && UploadedMainImage.imageName
                            ? UploadedMainImage.imageName
                            : updateformData.listPageImage
                        }
                        validators={["required"]}
                        errorMessages={["this field is required"]}
                      />
                    </Grid>
                    <br />

                    <label htmlFor="logoss">
                      <Button color="default" variant="contained" component="span">
                        Browse
                      </Button>
                    </label>
                    <input
                      style={{ display: "none" }}
                      id="logoss"
                      name="logo"
                      type="file"
                      onChange={handleFileMainImage}
                    />

                    <Button
                      style={{ marginLeft: "20px" }}
                      color="primary"
                      variant="contained"
                      component="span"
                      onClick={() => handleUploadMainImage()}
                    >
                      Upload 
                    </Button>
                    {/* <Button style={{ marginLeft: '20px' }} color="secondary" variant="contained" component="span" onClick={() => this.handleLogoRemove()}>
                      Remove
                      </Button> */}
                  </Grid>

                  <Grid item xs={12}></Grid>
                </Grid>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.submit}
                >
                  Save
                </Button>
              </ValidatorForm>
            </div>
          </div>
        </div>
      </Container>
    </Dialog>
  );
}
