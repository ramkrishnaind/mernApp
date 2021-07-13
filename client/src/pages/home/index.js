import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
  Dialog, 
  Grid,
  FormControl,
  Select,
  InputLabel,
  }
  
  from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Enquiry Now
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">ENQUIRY NOW</DialogTitle>
        <ValidatorForm 
        // onSubmit={this.handleSubmit}
        >
        <DialogContent>
        
          <Grid container s12c spacing={2}>
            <Grid item xs={12} sm={6}>

              <TextValidator
                label="Your Name*"
                fullWidth
                // onChange={handleChangeInput}
                name="name"
                id="name"
                // value={formData.abtCompany}
                variant="outlined"
                validators={['required']}
                errorMessages={['this field is required']}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextValidator
                label="Email*"
                fullWidth
                // onChange={handleChangeInput}
                name="email"
                id="email"
                type="email"
                // value={formData.abtCompany}
                variant="outlined"
                validators={['required']}
                errorMessages={['this field is required']}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextValidator
                label="Phone Number*"
                fullWidth
                // onChange={handleChangeInput}
                name="phone"
                id="phone"
                
                // value={formData.abtCompany}
                variant="outlined"
                validators={['required']}
                errorMessages={['this field is required']}
              />
            </Grid>

            <Grid className="form-group-item" item xs={12} sm={6}>

                  <FormControl
                      variant="outlined"
                      // className={classes.formControl}
                      style={{ width: "100%" }}
                    >
                      <InputLabel
                        id="demo-simple-select-outlined-label"
                        htmlFor="age-native-simple"
                      >
                        Choose Country
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined-label"
                        label="New Listing"
                        native
                        name="isNewListing"
                        // value={formData.isNewListing}
                        // onChange={this.handleChangeInput}
                        inputProps={{
                          name: "isNewListing",
                          id: "age-native-simple",
                        }}
                      >
                        <option value="india" selected>India</option>
                        <option value="us">US</option>
                        <option value="usa">USA</option>
                      </Select>
                    </FormControl>

                  </Grid>

                  <Grid className="form-group-item" item xs={12} sm={6}>

                  <FormControl
                      variant="outlined"
                      // className={classes.formControl}
                      style={{ width: "100%" }}
                    >
                      <InputLabel
                        id="demo-simple-select-outlined-label"
                        htmlFor="age-native-simple"
                      >
                        Select Property Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined-label"
                        label="New Listing"
                        native
                        name="pr_type"
                        // value={formData.pr_type}
                        // onChange={this.handleChangeInput}
                        inputProps={{
                          name: "pr_type",
                          id: "age-native-simple",
                        }}
                      >
                        {/* <option value="" selected>Choose Property Type</option> */}
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                      </Select>
                    </FormControl>

                  </Grid>

                  <Grid className="form-group-item" item xs={12} sm={6}>

                  <FormControl
                      variant="outlined"
                      // className={classes.formControl}
                      style={{ width: "100%" }}
                    >
                      <InputLabel
                        id="demo-simple-select-outlined-label"
                        htmlFor="age-native-simple"
                      >
                        Select property Name
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined-label"
                        label="New Listing"
                        native
                        name="pr_name"
                        // value={formData.pr_name}
                        // onChange={this.handleChangeInput}
                        inputProps={{
                          name: "pr_name",
                          id: "age-native-simple",
                        }}
                      >
                        {/* <option value="" selected>select property Name</option> */}
                        <option value="villa">Villa</option>
                        <option value="flat">Flats</option>
                        <option value="plot">Plot</option>
                      </Select>
                    </FormControl>

                  </Grid>

          </Grid>

                        {/* <Grid></Grid>
          <Button
                  // fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  // className={classes.submit}
                >
                  Save
                </Button> */}
              
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
          ENQUIRY NOW
          </Button>
        </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
