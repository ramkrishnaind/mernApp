import React, { useState,useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Box,
  Link 
} from "@material-ui/core";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";

import * as UserAction from "../../redux/actions/UserAction";
import { useDispatch } from "react-redux";
import FormHeader from "../../common/form-header";
import BreadCrumbs from "../../common/bread-crumbs";
import './userManagement.css';
import SubHeading from "../../common/SubHeadingBox";
import {
  BrowserRouter as Router,
  Link as RouterLink,
  useLocation
} from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import { connect } from "react-redux";
// import Link from "next/link";

const MenuCreateUpdate = (props) => {

  let query = useQuery();
  let id = query.get("id");
  let userData= props?.user?.userData;
  const[refresh,setRefresh] = useState(false);

    useEffect(() => {
        let data={
          _id:id 
        }
        if(id !=null){
          dispatch(UserAction.UserDataRequestAsync(data));
        }
        // dispatch(UserAction.RoleListRequestAsync());
        
      }, [id]);

      useEffect(() => {
        if(props.user.success) 
        {
          setRefresh(true) 
          setState(initialState)
        }
      }, [props.user.success]);

    const dispatch = useDispatch();

    const initialState = {
        firstName:userData?.firstName,
        lastName:userData?.lastName,
        email:userData?.email,
        country:userData?.countryCode,
        mobile:userData?.mobile,
        id:id,
        userRole:userData?.userRole,
      };
      
    const [state, setState] = useState(initialState);
    const [country, setCountry] = useState("+91");
    const [file, setFile] = useState("");

   

    const inputChange = (e) => {
        let { name, value } = e.target;
    
        setState({ ...state, [name]: value });
      };
    

    const handleSubmit = (e) => {
    
        const { firstName,lastName,id,email,mobile,userRole } = state;
        
        let LoginUserData = JSON.parse(window.localStorage.getItem('user'));
        if(id == null){
          let reqData = {
              firstName: firstName,
              lastName: lastName,
              email: email,
              countryCode: country,
              mobile: mobile,
              userRole:'60e84c1c8494c904475e8270',
              // createdBy:LoginUserData._id
          };
          // console.log('reqdsd',reqData);
          dispatch(UserAction.UserAddRequestAsync(reqData));
        }
        else{
          let reqData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            countryCode: country,
            mobile: mobile,
            userRole:'60e84c1c8494c904475e8270',
            // updatedBy:LoginUserData._id,
            _id:id
          };
          dispatch(UserAction.UserUpdateRequestAsync(reqData));
        } 
      };

    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }

    const handleChange = (event) => {
      // this.setState({
        setFile(URL.createObjectURL(event.target.files[0]))
        
      // })
    }
    return (
        <Box className="MenuManagement_Data">
          <FormHeader heading1={"User Module Management"} heading2={"Create and Update User Here"} />
          {state.id ? (
            <>
              <BreadCrumbs heading1={"UserManagement"} heading2={"Edit User Module"} />
              <SubHeading heading={"Edit User Module"}/>
            </>
          ):(
            <>
              <BreadCrumbs heading1={"UserManagement"} heading2={"Add User Module"} />
              <SubHeading heading={"Add User Module"}/>
            </>
          )
          }
        <Grid item xs={12} className="m-5 addUserFormanage">
          <div className="card w-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <Typography component="h3" variant="h3">
              {state.id ? 'Edit' : 'Add'} User
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
                    <Grid container spacing={3} className="FormFildes">  
                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            label="First Name*"
                            fullWidth
                            value={( state.firstName)?  state.firstName :userData?.firstName }
                            onChange={inputChange}
                            name="firstName"
                            id="firstName"
                            validators={["required"]}
                            errorMessages={["firstName field is required"]}
                            />
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            label="Last Name*"
                            fullWidth
                            value={( state.lastName)?  state.lastName :userData?.lastName }
                            onChange={inputChange}
                            name="lastName"
                            id="lastName"
                            validators={["required"]}
                            errorMessages={["lastName field is required"]}
                            />
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            label="Email*"
                            fullWidth
                            value={( state.email)?  state.email :userData?.email }
                            onChange={inputChange}
                            name="email"
                            id="email"
                            type="email"
                            validators={["required"]}
                            errorMessages={["email field is required"]}
                            />
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                          <Grid container spacing={1}>
                            <Grid item xs={12} sm={2}>
                              <PhoneInput
                                className="PhoneInput"
                                international
                                countryCallingCodeEditable={false}
                                defaultCountry="IN"
                                value={(country)?country:userData?.countryCode}
                                onChange={setCountry}
                                />
                            </Grid>
                            <Grid item xs={12} sm={10}>
                              <TextValidator
                                className="form-control-item"
                                variant="outlined"
                                label="Mobile*"
                                fullWidth
                                value={( state.mobile)?  state.mobile :userData?.mobile }
                                onChange={inputChange}
                                name="mobile"
                                id="mobile"
                                validators={["required"]}
                                errorMessages={["Mobile field is required"]}
                                />
                            </Grid>
                          </Grid>

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
                                Role
                              </InputLabel>
                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined-label"
                                  label="Role"
                                  native
                                  name='userRole'
                                  value={( state.userRole)?  state.userRole :userData?.userRole }
                                  onChange={inputChange}
                                  inputProps={{
                                  name: "userRole",
                                  id: "age-native-simple",
                                  }}
                                >
                                  <option value={true}>Active</option>
                                  <option value={false} >Inactive</option>
                              </Select>
                            </FormControl>
                        </Grid>

                        

                      </Grid>
                      <br/>
                      <SubHeading heading={"Upload Image"}/>
                      <Grid className="form-group-item" item xs={12} sm={6} md={4}>        
                      <label className="uploadbutton" htmlFor="mainImage">
                        <Button
                          color="default"
                          variant="contained"
                          component="span"
                        >
                          Browse
                        </Button>
                      </label>
                      <input
                        style={{ display: "none" }}
                        id="mainImage"
                        name="mainImage"
                        type="file"
                        onChange={handleChange}
                      />
                      
                        <img src={file} height="200px" width="200px"/>
                      </Grid>
                      
                        <br />
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

                        <Link component={RouterLink} to="/menu">
                          <Button
                              // fullWidth
                              variant="contained"
                              color="primary"
                              // onClick={() => history.goBack()}
                              type="button"
                              className={"CanceForm"}
                              >
                              Cancel
                          </Button>
                        </Link>
                            {/* <button type="button">
                                  Click Me!
                            </button> */}
                        
                        </Box>
                            
                    {/* </Grid> */}
                </ValidatorForm>
                </div>
            </div>
        </Grid>
    </Box>
    )
}


function mapStateToProps(state) {
  const { user } = state;
  return {
    user,
    
  };
}
export default connect(mapStateToProps)(
  (MenuCreateUpdate),
);
