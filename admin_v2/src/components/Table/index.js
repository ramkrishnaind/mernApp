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
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";

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
              <TableCell>NAME</TableCell>
              <TableCell>PARENT</TableCell>
              <TableCell>IMAGE</TableCell>
              <TableCell>List Image </TableCell>
              
              <TableCell style={{ textAlign: "center" }}>ACTION</TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {data.map((tempdata, index) => (
              <TableRow key={index}>
                <TableCell className="pl-3 fw-normal">
                  {offset + index + 1}
                </TableCell>
                <TableCell className="pl-3 fw-normal">
                  {tempdata.name}
                </TableCell>
                <TableCell className="pl-3 fw-normal">
                  {tempdata.parent_id ? tempdata.parent_id.name : "-"}
                </TableCell>
                <TableCell>
                  <img
                    src={tempdata.imageLink}
                    alt=" "
                    height="100"
                    width="200"
                  ></img>
                </TableCell>
                <TableCell>
                  <img
                    src={tempdata.listPageImageLink}
                    alt=" "
                    height="100"
                    width="200"
                  ></img>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <OpenInNewIcon
                    onClick={() => updatehandleOpenCreateModal(tempdata)}
                  />
                 
                  {tempdata.isDisable ? (
                    <CheckIcon
                      onClick={() => onDisable(tempdata,"enable")}
                      color="primary"
                    />
                  ) : (
                    <ClearIcon
                      onClick={() => onDisable(tempdata,"disable")}
                      style={{ color: "red" }}
                    ></ClearIcon>
                  )}
                 
                  <DeleteIcon
                    color="secondary"
                    onClick={() => onDeleteClick(tempdata)}
                  />
                 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
         */}
        </Table>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(TableComponent);
