import React, { useEffect } from "react";
import {
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import * as HomeSliderAction from "../../redux/actions/HomeSliderAction";
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
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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

const HomeSliderList = (props) => {

  const dispatch = useDispatch();
  let {
    classes,
    slider,
  } = props;

  useEffect(() => {
    dispatch(HomeSliderAction.SliderListRequestAsync());
  }, []);

  let options = {
    selectableRows: false,
    print: false,
    download: true,
  };


  function onDisable(data, status) {
    let tempdata = {
      _id: data,
      isDisable: status
    };
    dispatch(HomeSliderAction.SliderStatusUpdateRequestAsync(tempdata));

    if (status === "enable") {
      // toast.error("Disable")

    }
    else {
      // toast.success("Enable")
    }
  }

  function onDeleteClick(data) {
    let tempdata = {
      _id: data,

    };
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(HomeSliderAction.SliderDeleteRequestAsync(tempdata))
        },
        {
          label: 'No',

        }
      ]
    });
  }

  function updatehandleOpenCreateModal(data) {
    history.push('/slider/add?id=' + data)
    window.location.reload();
  }

  return (
    <>
      <FormHeader heading1={"Slider Module Management"} heading2={"List and Manage Slider Here"} />
      <BreadCrumbs heading1={"SliderManagement"} heading2={"Slider Module List"} />
      {slider?.list?.list && slider.list?.list.length > 0 ? (
        <>
          <MUIDataTable className="table-header"
            title="Slider List"
            data={slider.list?.list?.map((item, index) => {
              return [
                (index + 1),
                item.name,
                item.description,
                item.isDisable,
                item._id
              ]
            })}
            columns={['SR No.', 'Name', 'Description',
              {
                name: "Is Disable",
                options: {
                  customBodyRender: (value, tableMeta, updateValue) => {
                    if (value == true)
                      return (
                        'Yes'
                      );
                    else
                      return (
                        'No'
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
  const { slider } = state;
  console.log('slider',slider);
  return {
    slider,

  };
}
export default connect(mapStateToProps)(
  withStyles(styles)(HomeSliderList),
);


