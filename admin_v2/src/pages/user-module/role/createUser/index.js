import React, { useEffect, useState } from 'react'
import FormHeader from '../../../../common/form-header/index'
import BreadCrumbs from '../../../../common/bread-crumbs/index'
import '../createUser/create-user.css'
import { makeStyles,TextField, FormControlLabel, Checkbox, FormControl,NativeSelect, Button, Box, Select, InputLabel} from '@material-ui/core';
// import {GetModuleRightsRequestAsync} from "../../../../redux/actions/ModuleRightsAction";
import {Link as RouterLink} from 'react-router-dom';
import { connect } from "react-redux";
import * as ModuleRightsAction from "../../../../redux/actions/ModuleRightsAction";
import Grid from '@material-ui/core/Grid';

import {
    ValidatorForm,
    TextValidator,
    SelectValidator,
  } from "react-material-ui-form-validator";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
}));

function CreateUser(props){
    const [userRightsData, setUserRightsData] = useState([])

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false,
        checkedH: false,
        checkedI: false,
        checkedJ: false,
    });

    const [stateb, setStateb] = React.useState({
        age: '',
        name: 'hai',
      });

    const handleChanges = (event) => {
    const name = event.target.name;
    setStateb({
      ...stateb,
      [name]: event.target.value,
    });
  };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const classes = useStyles();

    useEffect(()=>{
        console.log("users update=", props.ModuleRight.data)
        setUserRightsData(props.ModuleRight?.data)
    },[props])

    useEffect(()=>{
        console.log("users rights api==", props.ModuleRight)
        props.GetUsersData();
    },[])


    return (
        <div>
            <FormHeader heading1={"User Role Management"} heading2={"create and manage user role here"}/>
            <BreadCrumbs heading1={"User Role"} heading2={"Create User Role"} />
            <div className="main-wrapper">
                <div className="panel panel-primary">
                    <div className="panel-heading">Create User Role</div>
                    <div className="panel-body">
                        <h2 className="title-heading">User Role Information</h2>
                        <div className="form">
                        <Grid container >
                                    <ValidatorForm className="formData">
                                        <Grid item xs={5}>
                                            <TextValidator
                                                className="form-control-item"
                                                variant="outlined"
                                                label="User Role Name*"
                                                fullWidth
                                                name="User Role Name"
                                                id="User-Role-Name"
                                                validators={["required"]}
                                                errorMessages={["User Name field is required"]}
                                                />
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={5}>
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
                                        inputProps={{
                                        name: "status",
                                        id: "age-native-simple",
                                        }}
                                    >
                                        <option value={true} selected>Active</option>
                                        <option value={false} >Inactive</option>
                                    </Select>
                                </FormControl>
                                </Grid>
                                </ValidatorForm>
                                </Grid>
                        </div>


                        <h2 className="title-heading">Module Rights</h2>
                        <div>
                        <Grid container spacing={3}>
                            {userRightsData && userRightsData?.data?.map((items,index)=>{
                                return(
                                    <Grid item xs={3}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    // checked={state.checkedA}
                                                    onChange={handleChange}
                                                    name={items.name}
                                                    color="primary"
                                                />
                                            }
                                            label={items.name}
                                        />
                                        {/* <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="User"
                                        /> */}
                                    
                                    </Grid>
                                )
                            })}
                            </Grid>
                            
                            {/* <div className="subcheck">
                               <div className="col-1 d-flex w-100">
                                <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.checkedC}
                                                onChange={handleChange}
                                                name="checkedC"
                                                color="primary"
                                            />
                                        }


                                        label="Create User Role"
                                    /> 
                                     <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.checkedD}
                                                onChange={handleChange}
                                                name="checkedD"
                                                color="primary"
                                            />
                                        }
                                        label="Add/Edit User Role"
                                    /> 
                               </div>

                            </div> */}
                            
                        </div>
                        <Box className="footer">
                        <Button
                            // fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={"SaveData"}
                            >
                            Save
                        </Button>
                        <Button
                            // fullWidth
                            variant="contained"
                            color="primary"
                            // onClick={() => window.history.push("menu")}
                            type="button"
                            className={"CanceForm"}
                            >
                            Cancel
                        </Button>
                            {/* <button type="button">
                                  Click Me!
                            </button> */}
                        
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    console.log("state=== on create user==  ", state);
    // const { loggingIn } = state.Login.data;
    // const { users } = state;
    return {
      // loggingIn,
      ModuleRight : state.ModuleReducer,
    };
  }

  const mapDispatchToProps = dispatch =>{
      return{
          GetUsersData: () => dispatch(ModuleRightsAction.GetModuleRightsRequestAsync())
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);

// export default CreateUser;
