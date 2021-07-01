import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from "@material-ui/icons/Clear";

// const states = {
//   true: "success",
//   false: "warning",
//   declined: "secondary",
// };

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

function TableComponent(props) {
  let {
    data,
    offset,
    updatehandleOpenCreateModal,
    onDeleteClick,
    onDisable,
    classes,
  } = props;
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <Table className="mb-0">
          <TableHead>
            <TableRow>
              <TableCell>S. NO.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Contact No</TableCell>
              <TableCell>Role Name</TableCell>
              
              <TableCell style={{ textAlign: "center" }}>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((tempdata, index) => (
              <TableRow key={index}>
                <TableCell className="pl-3 fw-normal">{offset + index + 1}</TableCell>
                <TableCell className="pl-3 fw-normal">{tempdata.name}</TableCell>
                <TableCell className="pl-3 fw-normal">{tempdata.email}</TableCell>
                <TableCell className="pl-3 fw-normal">{tempdata.username}</TableCell>
                <TableCell className="pl-3 fw-normal">{tempdata.contactNo}</TableCell>
                <TableCell className="pl-3 fw-normal">{tempdata.role?.userRoleName}</TableCell>
                <TableCell style={{ textAlign: "center" }}>
                <OpenInNewIcon  onClick={() => updatehandleOpenCreateModal(tempdata)}/>
                 
                  {tempdata.status ? (
                  <CheckIcon
                    onClick={() => onDisable(tempdata)}
                    color="primary"
                  />

                ) : (
                  <ClearIcon onClick={() => onDisable(tempdata)} style={{ color: "red" }}></ClearIcon>
                )}
                  
                  {/* <DeleteIcon color="secondary" onClick={() => onDeleteClick(tempdata)} /> */}
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(TableComponent);
