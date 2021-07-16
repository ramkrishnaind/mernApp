import React, { useEffect } from 'react'
import FormHeader from '../../../../common/form-header/index'
import BreadCrumbs from '../../../../common/bread-crumbs/index'
import '../createUser/create-user.css'
import { makeStyles,TextField, FormControlLabel, Checkbox, FormControl,NativeSelect, Button } from '@material-ui/core';
import {GetModuleRightsRequestAsync} from "../../../../redux/actions/ModuleRightsAction";
import {Link as RouterLink} from 'react-router-dom';
import { connect } from "react-redux";


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
        console.log("users rights api==")
        props.GetUsersData(null, props.token);
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
                            <div className="col-1 w-50">
                                <form className={classes.root} noValidate autoComplete="off">
                                    <label>User Role Name</label><TextField id="outlined-basic" placeholder="User Role Name" variant="outlined" />
                                </form>
                            </div>
                            <div className="col-1">
                                <form className={classes.root} noValidate autoComplete="off">
                                    <label>Status</label>
                                    <FormControl className={classes.formControl}>
                                        <NativeSelect
                                            value={stateb.name}
                                            onChange={handleChanges}
                                            inputProps={{
                                                name: 'name',
                                                id: 'name-native-disabled',
                                            }}
                                        >
                                            <option value="hai">Select User Status</option>
                                            <optgroup label="Select User Status ">
                                                <option value="olivier">Active</option>
                                                <option value="kevin">Inactive</option>
                                            </optgroup>
                                        </NativeSelect>

                                    </FormControl>
                                </form>
                            </div>
                        </div>


                        <h2 className="title-heading">Module Rights</h2>
                        <div className="form">
                            <div className="col-1 d-flex w-100">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            color="primary"
                                        />
                                    }
                                    label="Dashboard"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedB}
                                            onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="User"
                                />
                               
                            </div>
                            <div className="subcheck">
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

                               <div className="col-1 d-flex w-100">
                                <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.checkedE}
                                                onChange={handleChange}
                                                name="checkedE"
                                                color="primary"
                                            />
                                        }
                                        label="User Role"
                                    /> 
                               </div>

                               <div className="col-1 d-flex w-100">
                                <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.checkedG}
                                                onChange={handleChange}
                                                name="checkedG"
                                                color="primary"
                                            />
                                        }
                                        label="Create User"
                                    /> 
                                     <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.checkedH}
                                                onChange={handleChange}
                                                name="checkedH"
                                                color="primary"
                                            />
                                        }
                                        label="Add/Edit User Role"
                                    /> 
                               </div>

                               <div className="col-1 d-flex w-100">
                                <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.checkedI}
                                                onChange={handleChange}
                                                name="checkedI"
                                                color="primary"
                                            />
                                        }
                                        label="User"
                                    /> 
                                     <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.checkedJ}
                                                onChange={handleChange}
                                                name="checkedJ"
                                                color="primary"
                                            />
                                        }
                                        label="My Profile"
                                    /> 
                               </div>

                               

                            </div>
                            
                        </div>
                        <Button
                            // fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            // className={classes.submit}
                            >
                            Save
                        </Button>
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
      token: state.Login?.data?.user?.token,
    };
  }

  const mapDispatchToProps = dispatch =>{
      return{
          GetUsersData: (data, token) => dispatch(GetModuleRightsRequestAsync(data, token))
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);

// export default CreateUser;
