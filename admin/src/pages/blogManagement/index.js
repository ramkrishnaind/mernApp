import React, { useEffect } from "react";
import {
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import * as BlogAction from "../../redux/actions/BlogAction";
import { useDispatch } from "react-redux";

import BreadCrumbs from "../../common/bread-crumbs";
import FormHeader from "../../common/form-header";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";

import Done from "@material-ui/icons/Done";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

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

const BlogList = (props) => {

  const dispatch = useDispatch();
  let {
    classes,
    blog,
  } = props;

  useEffect(() => {
    dispatch(BlogAction.BlogListRequestAsync());
  }, []);

  let options = {
    selectableRows: false,
    print: false,
    download: true,
  };


  function onDisable(data, status) {
    let tempdata = {
      id: data,
      status: status
    };
    dispatch(BlogAction.BlogStatusUpdateRequestAsync(tempdata));

    if (status === "enable") {
      // toast.error("Disable")

    }
    else {
      // toast.success("Enable")
    }
  }

  function onDeleteClick(data) {

  }

  function updatehandleOpenCreateModal(data) {
    // window.location.href = "/blog/edit?id="+data;
    history.push('/blog/add?id=' + data)
    window.location.reload();
  }

  return (
    <>
      <FormHeader heading1={"Blog Module Management"} heading2={"List and Manage Blog Here"} />
      <BreadCrumbs heading1={"BlogManagement"} heading2={"Blog Module List"} />
      {blog.list && blog.list.length > 0 ? (
        <>
          <MUIDataTable className="table-header"
            title="Blog List"
            data={blog.list.map((item, index) => {
              return [
                (index + 1),
                item.name,
                item.description,
                item.status,
                item._id
              ]
            })}
            columns={['SR No.', 'Name', 'Description',
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
                        <EditIcon style={{ color: "#0069d9", cursor: "pointer" }} onClick={() => updatehandleOpenCreateModal(tableMeta.rowData[4])} />

                        {tableMeta.rowData[3] ? (
                          <Tooltip title="Active">
                            <Done
                              onClick={() => onDisable(tableMeta.rowData[4], false)}
                              style={{ color: "#1e7e34", cursor: "pointer" }}
                            />
                          </Tooltip>

                        ) : (
                            <Tooltip title="Inactive">
                              <ClearIcon
                                onClick={() => onDisable(tableMeta.rowData[4], true)}
                                style={{ color: "#bd2130", cursor: "pointer" }}
                              />
                            </Tooltip>
                          )}

                        <DeleteIcon style={{ color: "#bd2130", cursor: "pointer" }} onClick={() => onDeleteClick(tableMeta.rowData[4])} />
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
  const { blog } = state;
  return {
    blog,

  };
}
export default connect(mapStateToProps)(
  withStyles(styles)(BlogList),
);


