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

const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: "0px 0px",
    "&:hover": {
      color: "#212529",
      backgroundColor: "#000000",
      // backgroundColor: "red"
    }
  }
}))(TableRow);

const StyledTableHead = withStyles((theme) => ({
  root: {
      color: "#6c7293",
      backgroundColor: "#000000",
      fontWeight: 500,
      borderBottomWidth: "1px",
    
  }
}))(TableHead);
// border-top: 0;
// border-bottom-width: 1px;
// font-weight: 500;
// color: #6c7293;

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
          <StyledTableHead>
            <TableRow>
              <TableCell>S. NO.</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>IMAGE</TableCell>
              <TableCell>List Image </TableCell>
              <TableCell style={{ textAlign: "center" }}>ACTION</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {data.map((tempdata, index) => (
              <StyledTableCell key={index} >
                
                <TableCell className="pl-3 fw-normal">
                  {offset + index + 1}
                </TableCell>
                <TableCell className="pl-3 fw-normal">
                  {tempdata.name}
                </TableCell>

                <TableCell>
                  <img
                    src={tempdata?.imageLink}
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
                <OpenInNewIcon  onClick={() => updatehandleOpenCreateModal(tempdata)}/>
                  {/* <Button
                    color="success"
                    size="small"
                    className="px-2"
                    variant="contained"
                    style={{ marginRight: "5px" }}
                    onClick={() => updatehandleOpenCreateModal(tempdata)}
                  >
                    More Details..
                  </Button> */}
                  {/* <CheckIcon onClick={() => onDisable(tempdata)} color="primary"/> */}
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
                  {/* <Button
                    color={tempdata.isDisable ? "warning" : "primary"}
                    size="small"
                    className="px-2"
                    variant="contained"
                    style={{ marginRight: "5px" }}
                    onClick={() => onDisable(tempdata)}
                  >
                    {tempdata.isDisable ? "Disable" : "Enable"}
                  </Button> */}
                  <DeleteIcon color="secondary" onClick={() => onDeleteClick(tempdata)} />
                  {/* <Button
                    color="secondary"
                    size="small"
                    className="px-2"
                    variant="contained"
                    style={{ marginRight: "5px" }}
                    onClick={() => onDeleteClick(tempdata)}
                  >
                    Delete
                  </Button> */}
                </TableCell>
              </StyledTableCell>
            ))}
          </TableBody>
        </Table>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(TableComponent);
