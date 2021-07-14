import React, { Component } from "react";
import {
  Button,
  Grid,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
 
} from "@material-ui/core";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";


const MenuList = () => {
    return (
        <>
        <Grid item xs={12} className="m-5">
          <div className="card w-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <Typography component="h3" variant="h3">
                Add Menu
              </Typography>
              {/* <Button
                onClick={() => this.props.history.push("menu")}
                variant="contained"
                color="primary"
                type="submit"
                
              >Back</Button> */}
            </div>
                <div class="card-body">
                <ValidatorForm>
                    <Grid container spacing={3}>  
                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <SelectValidator
                                className="form-control-item"
                                variant="outlined"
                                label="Menu/Top Category"
                                fullWidth
                                //   onChange={this.handleChangeInput}
                                name="menuID"
                                id="menuID"
                                //   value={formData.menuID}
                                validators={["required"]}
                                errorMessages={["this field is required"]}
                            >
                                <MenuItem key="1" value="1">
                                test
                                </MenuItem>
                                <MenuItem key="1" value="1">
                                test
                                </MenuItem>

                                <MenuItem key="1" value="1">
                                test
                                </MenuItem>
                            </SelectValidator>
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <SelectValidator
                                className="form-control-item"
                                variant="outlined"
                                label="parentID"
                                fullWidth
                                //   onChange={this.handleChangeInput}
                                name="menuID"
                                id="menuID"
                                //   value={formData.menuID}
                                validators={["required"]}
                                errorMessages={["this field is required"]}
                            >
                            {/* {this.props.product?.menuList?.map((menu, index) => ( */}
                                {/* <MenuItem key={index} value={menu?.id}> */}
                                {/* {menu?.name} */}
                                <MenuItem key="1" value="1">
                                test
                                </MenuItem>
                                <MenuItem key="1" value="1">
                                test
                                </MenuItem>

                                <MenuItem key="1" value="1">
                                test
                                </MenuItem>
                            {/* ))} */}
                            </SelectValidator>
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            label=" name*"
                            fullWidth
                            // onChange={this.handleChangeInput}
                            name="name"
                            id="name"
                            // value={formData.name}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                            />
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            label=" icon*"
                            fullWidth
                            // onChange={this.handleChangeInput}
                            name="icon"
                            id="icon"
                            // value={formData.icon}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                            />
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            label=" Description*"
                            fullWidth
                            // onChange={this.handleChangeInput}
                            name="description"
                            id="description"
                            // value={formData.description}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                            />
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            label=" endPoint*"
                            fullWidth
                            // onChange={this.handleChangeInput}
                            name="endPoint"
                            id="endPoint"
                            // value={formData.endPoint}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                            />
                        </Grid>
                        
                        <Button
                            // fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            // className={classes.submit}
                            >
                            Save
                        </Button>
                            
                    </Grid>
                </ValidatorForm>
                </div>
            </div>
        </Grid>
    </>
    )
}

export default MenuList