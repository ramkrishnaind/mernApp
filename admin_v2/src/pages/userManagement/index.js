import React,{useEffect} from "react";
import {
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import * as UserAction from "../../redux/actions/UserAction";
import { useDispatch } from "react-redux";

import BreadCrumbs from "../../common/bread-crumbs";
import FormHeader from "../../common/form-header";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";

import Done from "@material-ui/icons/Done";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ClearIcon from "@material-ui/icons/Clear";

import history from "../../components/history";
const styles = (theme) => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto",
    },
    table: {
      minWidth: 650,
    },
});

const UserList = (props) => {

    const dispatch = useDispatch();
    let {
        classes,
        user,
      } = props;

    useEffect(() => {
    dispatch(UserAction.UserListRequestAsync());
    }, []);

  let options = {
    selectableRows: false,
    print: false,
    download: true,
  };
  

  function onDisable(data,status) {
    let tempdata = {
      _id: data,
      status:status
    };
    dispatch(UserAction.UserStatusUpdateRequestAsync(tempdata));
   
    if(status==="enable"){
      // toast.error("Disable")

    }
    else{
      // toast.success("Enable")
    }
  }

  function onDeleteClick(id) {
    let tempdata = {
      _id: id,
    };
    dispatch(UserAction.UserDeleteRequestAsync(tempdata));
   
  }
  
  function updatehandleOpenCreateModal(data) {
    // window.location.href = "/menu/edit?id="+data;
    history.push('/user/add?id='+data)
    window.location.reload();
  }

    return (
        <>
         <FormHeader heading1={"User Module Management"} heading2={"List and Manage User Here"} />
        <BreadCrumbs heading1={"UserManagement"} heading2={"User Module List"} />
        {user.list && user.list.length > 0 ? (
            <>
          <MUIDataTable className="table-header"
            title="User List"
            data={user.list.map((item,index) => {
                return [
                    (index +1),
                    item.firstName +' '+ item.lastName,
                    item.email,
                    item.countryCode +' '+ item.mobile,
                    item.verified,
                    item._id
                ]
            })}
            columns={['SR No.','Full Name','Email','Phone',
            {
              name: "Status",
              options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                  if (value === true)
                    return (
                      'Active'
                    );
                  else
                    return (
                      'Inactive'
                    );
                }
              }
            },
            {
              name: "Actions",
              options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                  return (
                    <>
                    <OpenInNewIcon style={{ color: "#0069d9", cursor:"pointer" }} onClick={() => updatehandleOpenCreateModal(tableMeta.rowData[5])}/>

                    {tableMeta.rowData[4] ? (
                      <Tooltip title="Active">
                        <Done
                        onClick={() =>onDisable(tableMeta.rowData[5],false)}
                        style={{ color: "#1e7e34", cursor:"pointer" }}
                      />
                      </Tooltip>
                      
                    ) : (
                      <Tooltip title="Inactive">
                        <ClearIcon 
                          onClick={() => onDisable(tableMeta.rowData[5],true)}
                          style={{ color: "#bd2130", cursor:"pointer" }}
                        />
                      </Tooltip>
                    )}
                    
                    <DeleteIcon style={{ color: "#bd2130", cursor:"pointer" }} onClick={() => onDeleteClick(tableMeta.rowData[5])} />
                    </>
                  );
                }
              }
            }
            ]}
            options={options}

          />
            </>
          ) : (
            <Typography>Data not found.</Typography>
          )}
        </>
    );
    
} 


function mapStateToProps(state) {
  const { user } = state;
  return {
    user,
    
  };
}
export default connect(mapStateToProps)(
  withStyles(styles)(UserList),
);

