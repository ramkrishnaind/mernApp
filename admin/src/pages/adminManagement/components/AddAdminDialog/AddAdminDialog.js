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
  MenuItem,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "../../../../components/Wrappers/Wrappers";
import SelectValidator from "@material-ui/core/Select";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export default function AddAdminDialog(props) {
  let {
    classes,
    formData,
    adminCreateModal,
    handleClose,
    handleChangeInput,
    handleSubmit,
    handleFileLogo,
    handleUploadLogo,
    filesDetails,
    getRoles
  } = props;
  
  return (
    <Dialog fullScreen open={adminCreateModal} onClose={handleClose}>
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
            Add Admin
          </Typography>
          <Button color="inherit" onClick={handleClose}>
            Cancel
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>

          <div className="card w-100">
            <div class="card-header d-flex justify-content-between align-items-center">
              <Typography component="h1" variant="h5">
                Add Admin
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
                  <Grid item xs={12} sm={6}>
                    <TextValidator
                      label="Name*"
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

                  <Grid item xs={12} sm={6}>
                    <TextValidator
                      label="Email*"
                      fullWidth
                      variant="outlined"
                      onChange={handleChangeInput}
                      name="email"
                      id="email"
                      value={formData.email}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextValidator
                      label="Password*"
                      fullWidth
                      variant="outlined"
                      onChange={handleChangeInput}
                      name="password"
                      id="password"
                      type="password"
                      value={formData.password}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                      <InputLabel id="demo-simple-select-outlined-label" htmlFor="age-native-simple">Choose Role</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined-label"
                        label="Choose Role"
                        native
                        value={formData.role}
                        onChange={handleChangeInput}
                        inputProps={{
                          name: "role",
                          id: "age-native-simple",
                        }}
                      >
                        <option aria-label="None" value="" />
                        {
                          getRoles && getRoles.length ?
                            getRoles.map((element) => (<option value={element.id}>{element.userRoleName}</option>)) : null
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  <Grid item xs={6} sm={6}>
                    <TextValidator
                      label="Contact No*"
                      fullWidth
                      variant="outlined"
                      onChange={handleChangeInput}
                      name="contactNo"
                      id="contactNo"
                      value={formData.contactNo}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </Grid>
 
                  <Grid item xs={12} sm={6}>
                  <FormControl variant="outlined" className={classes.formControl} style={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-outlined-label" htmlFor="age-native-simple">Status</InputLabel>
                 
                     <SelectValidator
                      className="form-control-item"
                      variant="outlined"
                      label="status"
                      fullWidth
                      onChange={handleChangeInput}
                      name="status"
                      id="status"
                      value={formData.status}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    >
                    
                    <MenuItem key={true} selected value={true}>
                    Active
                    </MenuItem>
                    <MenuItem key={false} value={false}>
                    Inactive
                    </MenuItem>
                    
                    </SelectValidator>
                  </FormControl>
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
