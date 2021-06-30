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


export default function UpdateAdminDialog(props) {

  let { classes, updateformData, updateadminCreateModal, updatehandleClose, updatehandleChangeInput, updatehandleSubmit,getRoles } = props;
  return (
    <Dialog fullScreen open={updateadminCreateModal} onClose={updatehandleClose} >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={updatehandleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Update Admin
      </Typography>
          <Button color="inherit" onClick={updatehandleClose}>
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
                Update Admin
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
               
                  <Grid item xs={12} sm={6}>
                    <TextValidator
                      label="Name*"
                      fullWidth
                      variant="outlined"
                      onChange={updatehandleChangeInput}
                      name="name"
                      id="name"
                      value={updateformData.name}
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
                        value={updateformData.roleId}
                        onChange={updatehandleChangeInput}
                        inputProps={{
                          name: "roleId",
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
                      onChange={updatehandleChangeInput}
                      name="contactNo"
                      id="contactNo"
                      value={updateformData.contactNo}
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
                      onChange={updatehandleChangeInput}
                      name="status"
                      id="status"
                      value={updateformData.status}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    >
                    
                    <MenuItem key={true} value={true}>
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
