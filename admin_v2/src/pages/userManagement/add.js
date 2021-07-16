import React, { useState } from "react";
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

import * as MenuAction from "../../redux/actions/MenuAction";
import { useDispatch } from "react-redux";

const MenuList = (props) => {
    const dispatch = useDispatch();
    const initialState = {
        role: "",
        fname:"",
        lname:"",
        email:"",
        password:"",
        phone:"",
        status:true,
      };
      
    const [state, setState] = useState(initialState);

    const inputChange = (e) => {
        let { name, value } = e.target;
    
        setState({ ...state, [name]: value });
      };
    

    const handleSubmit = (e) => {
    
        const { role, fname,lname,email,password,phone,status } = state;
    
        let reqData = {
            fname: fname,
            lname: lname,
            email: email,
            role: role,
            password: password,
            phone: phone,
            status:status,
            createdBy:"60c8f72a2002b60ac1b6b50a"
        };
        
        console.log("reqData  ", reqData);
        dispatch(MenuAction.MenuAddRequestAsync(reqData));
    
        // props.dispatch(userActions.login({ fname: email, password }));
      };

      
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
                <ValidatorForm onSubmit={handleSubmit}>
                    <Grid container spacing={3}>  
                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <SelectValidator
                                className="form-control-item"
                                variant="outlined"
                                label="Role"
                                fullWidth
                                value={state.role}
                                onChange={inputChange}
                                name="role"
                                id="role"
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
                            <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            label="First Name*"
                            fullWidth
                            value={state.fname}
                            onChange={inputChange}
                            name="fname"
                            id="fname"
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                            />
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            label="Last Name*"
                            fullWidth
                            value={state.lname}
                            onChange={inputChange}
                            name="lname"
                            id="lname"
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                            />
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            label="Email *"
                            fullWidth
                            value={state.email}
                            onChange={inputChange}
                            name="email"
                            id="email"
                            type="email"
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                            />
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            label=" Password*"
                            fullWidth
                            value={state.password}
                            onChange={inputChange}
                            name="password"
                            id="password"
                            type="password"
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                            />
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            label=" Phone No.*"
                            fullWidth
                            value={state.phone}
                            onChange={inputChange}
                            name="phone"
                            id="phone"
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                            />
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <FormControl
                            variant="outlined"
                            style={{ width: "100%" }}
                            >
                            <InputLabel
                                id="demo-simple-select-outlined-label"
                                htmlFor="age-native-simple"
                            >
                                Status
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined-label"
                                label="Status"
                                native
                                name="status"
                                value={state.status}
                                onChange={inputChange}
                                inputProps={{
                                name: "status",
                                id: "age-native-simple",
                                }}
                            >
                                <option value={true} selected>Yes</option>
                                <option value={false} >No</option>
                            </Select>
                            </FormControl>

                        </Grid>
                        </Grid>
                        <br />
                        <Button
                            // fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            // className={classes.submit}
                            >
                            Save
                        </Button>
                            
                    {/* </Grid> */}
                </ValidatorForm>
                </div>
            </div>
        </Grid>
    </>
    )
}

export default MenuList