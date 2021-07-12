import React from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "../../../../components/Wrappers/Wrappers";

export default function AddMenuDialog(props) {
  let {
    classes,
    formData,
    menuCreateModal,
    handleClose,
    handleChangeInput,
    handleSubmit,
    handleFileLogo,
    handleUploadLogo,
    filesDetails,
    UploadedMainImage,
    handleUploadMainImage,
    handleFileMainImage

  } = props;
  //console.log("menuCreateModal  ",menuCreateModal);

  return (
    <Dialog fullScreen open={menuCreateModal} onClose={handleClose}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Add New Menu
          </Typography>
          <Button color="inherit" onClick={handleClose}>
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
                Add Menu
          </Typography>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.submit}
                onClick={handleClose}
              >Back</Button>
            </div>
            <div class="card-body">
              <ValidatorForm onSubmit={handleSubmit}>
                

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextValidator
                      label="name*"
                      fullWidth
                      variant="outlined"
                      onChange={handleChangeInput}
                      name="name"
                      id="name"
                      value={formData.name}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </Grid>

                  <Grid item xs={12}></Grid>
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
                            : ""
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
                            : ""
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
