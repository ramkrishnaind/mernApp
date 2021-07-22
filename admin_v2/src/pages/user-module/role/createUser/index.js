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
import * as CreateUserRoleAction from "../../../../redux/actions/CreateUserRoleAction";
import { useDispatch } from "react-redux";


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
    const [membersRightId, setMembersRightId] = useState([])
    const dispatch = useDispatch();

    const insialState ={
        id: null,
        name: "abcd",
        rights: [],
        status : true,
        createdBy: "60eadf8ca621715e47c6f678",
        updatedBy: "60eadf8ca621715e47c6f678"
    }

    const [state, setState] = useState(insialState);

    

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

  useEffect(()=>{
    console.log("updated data==", membersRightId)
  },[membersRightId])

    const handleChange = (checkboxId, e) => {
        // setState({ ...state, [event.target.name]: event.target.checked });
        console.log("current Check Box Value==", checkboxId, "id==")
        let Array = []

        setMembersRightId(oldArray => [...oldArray, checkboxId])
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

    const handleSubmit =()=>{
        const {id, name, rights, status, createdBy,updatedBy } =state
        let reqData = {
            id: null,
            name: name,
            rights: membersRightId,
            updatedBy: updatedBy,
            status:status,
            createdBy:createdBy
        };
        console.log("heloo===reqData", reqData)
        dispatch(CreateUserRoleAction.GetCreateUserRoleActionRequestAsync(reqData));
    }

    const inputChange = (e) => {
        let { name, value } = e.target;

        // console.log("helo==", e.currenttarget.value)
    
        setState({ ...state, [name]: value });
      };

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
                        
                                    <ValidatorForm className="formData" onSubmit={handleSubmit}>
                                    <Grid container className="inputTopFileds">
                                        <Grid item xs={5}>
                                            <TextValidator
                                                className="form-control-item"
                                                variant="outlined"
                                                label="User Role Name*"
                                                fullWidth
                                                name="User Role Name"
                                                id="User-Role-Name"
                                                onChange={inputChange}
                                                // validators={["required"]}
                                                // errorMessages={["User Name field is required"]}
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
                                </Grid>

                        <h2 className="title-heading">Module Rights</h2>
                    
                        <Grid container spacing={3}>
                            {userRightsData && userRightsData?.data?.map((items,index)=>{
                                return(
                                    <Grid item xs={3}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    // checked={state.checkedA}
                                                    onChange={(e) => handleChange(items._id)}
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
                            </ValidatorForm>
                                
                        </div>

                           
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    console.log("state=== on create user==  ", state);
    // const { loggingIn } = state.Login.data;
    const { UserRoleReducer } = state;
    return {
      // loggingIn,
      ModuleRight : state.ModuleReducer,
      UserRoleReducer,
    };
  }

  const mapDispatchToProps = dispatch =>{
      return{
          GetUsersData: () => dispatch(ModuleRightsAction.GetModuleRightsRequestAsync())
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);

// export default CreateUser;
