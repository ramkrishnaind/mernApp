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
import './blogManagement.css';
import SubHeading from "../../common/SubHeadingBox";
import {
  BrowserRouter as Router,
  Link as RouterLink,
  useLocation
} from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import { connect } from "react-redux";
// import Link from "next/link";

import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 

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
    const [description, setDescription] = useState("");
    
   

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

    const handleChangeTextEditor =(content, editor) =>{
      
      setDescription(content);
    }

    return (
        <Box className="MenuManagement_Data">
          <FormHeader heading1={"Blog Module Management"} heading2={"Create and Update Blog Here"} />
          {state.id ? (
            <>
              <BreadCrumbs heading1={"BlogManagement"} heading2={"Edit Blog Module"} />
              <SubHeading heading={"Edit Blog Module"}/>
            </>
          ):(
            <>
              <BreadCrumbs heading1={"BlogManagement"} heading2={"Add Blog Module"} />
              <SubHeading heading={"Add Blog Module"}/>
            </>
          )
          }
        <Grid item xs={12} className="m-5 addUserFormanage">
          <div className="card w-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <Typography component="h3" variant="h3">
              {state.id ? 'Edit' : 'Add'} Blog
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
                            label="Title*"
                            fullWidth
                            value={( state.firstName)?  state.firstName :userData?.firstName }
                            onChange={inputChange}
                            name="title"
                            id="title"
                            validators={["required"]}
                            errorMessages={["title field is required"]}
                            />
                        </Grid>

                        <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                            <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            label="Short Description*"
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
                            <FormControl
                              variant="outlined"
                              style={{ width: "100%" }}
                            >
                              <InputLabel
                                  id="demo-simple-select-outlined-label"
                                  htmlFor="age-native-simple"
                              >
                                Category
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
                                  <option value={true}>Business Analysis</option>
                                  <option value={false} >Consultancy</option>
                              </Select>
                            </FormControl>
                        </Grid>

                    <Grid className="form-group-item" item xs={12} sm={12} md={12}>
                      <ReactQuill 
                        onChange={handleChangeTextEditor}
                        // value={updateformData.desc}
                        placeholder='Enter description'
                        theme= 'snow'  
                      />
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
