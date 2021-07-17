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
import FormHeader from "../../common/form-header";
import BreadCrumbs from "../../common/bread-crumbs";

const MenuList = (props) => {
    const dispatch = useDispatch();
    const initialState = {
        topParentID: "",
        parentID: "",
        name:"",
        icon:"",
        description:"",
        endPoint:"",
        status:true,
      };
      
    const [state, setState] = useState(initialState);

    const inputChange = (e) => {
        let { name, value } = e.target;
    
        setState({ ...state, [name]: value });
      };
    

    const handleSubmit = (e) => {
    
        const { topParentID, parentID,name,icon,description,endPoint,status } = state;
    
        let reqData = {
            name: name,
            icon: icon,
            topParentID: topParentID,
            parentID: parentID,
            description: description,
            endPoint: endPoint,
            status:status,
            createdBy:"60c8f72a2002b60ac1b6b50a"
        };
        
        console.log("reqData  ", reqData);
        dispatch(MenuAction.MenuAddRequestAsync(reqData));
    
        // props.dispatch(userActions.login({ fname: email, password }));
      };

      
    return (
        <>
         <FormHeader />
        <BreadCrumbs />
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
                                label="Menu/Top Category"
                                fullWidth
                                value={state.topParentID}
                                onChange={inputChange}
                                name="topParentID"
                                id="topParentID"
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
                                value={state.parentID}
                                onChange={inputChange}
                                name="parentID"
                                id="parentID"
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
                            value={state.name}
                            onChange={inputChange}
                            name="name"
                            id="name"
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
                            value={state.icon}
                            onChange={inputChange}
                            name="icon"
                            id="icon"
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
                            value={state.description}
                            onChange={inputChange}
                            name="description"
                            id="description"
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
                            value={state.endPoint}
                            onChange={inputChange}
                            name="endPoint"
                            id="endPoint"
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