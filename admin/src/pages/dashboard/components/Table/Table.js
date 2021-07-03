import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";
import { Button } from "../../../../components/Wrappers";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

// const states = {
//   true: "success",
//   false: "warning",
//   declined: "secondary",
// };

export default function TableComponent(props) {
  let {data,offset,onRowClick,onDeleteClick,onDisable}=props;
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          <TableCell >S. NO.</TableCell>
          <TableCell >NAME</TableCell>
          <TableCell >ADDRESS</TableCell>
          <TableCell >MOBILE</TableCell>
          {/* <TableCell >RATING</TableCell> */}
          <TableCell >ACTION</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          data.map((tempdata, index) => (
            <TableRow key={index}>
              <TableCell className="pl-3 fw-normal">{offset + index + 1}</TableCell>
              <TableCell className="pl-3 fw-normal">{tempdata.name}</TableCell>
              <TableCell>{tempdata.address}</TableCell>
              <TableCell>{tempdata.mobile}</TableCell>
              {/* <TableCell>{tempdata.rating}</TableCell> */}
              <TableCell>
                 <OpenInNewIcon  onClick={()=>onRowClick(tempdata)}/>
                <CheckIcon onClick={()=>onDisable(tempdata)} color="primary"/>
                <DeleteIcon color="secondary" onClick={()=>onDeleteClick(tempdata)} />
                {/* <Button
                  color="success"
                  size="small"
                  className="px-2"
                  variant="contained"
                  style={{marginRight:'5px'}}
                  onClick={()=>onRowClick(tempdata)}
                >
                More Details..
              </Button>

              <Button
                  color={tempdata.status?"warning":"primary"}
                  size="small"
                  className="px-2"
                  variant="contained"
                  style={{marginRight:'5px'}}
                  onClick={()=>onDisable(tempdata)}
                >
                {tempdata.status?'Disable':'Enable'}
              </Button>
              <Button
                  color="secondary"
                  size="small"
                  className="px-2"
                  variant="contained"
                  style={{marginRight:'5px'}}
                  onClick={()=>onDeleteClick(tempdata)}
                >
                Delete
              </Button> */}
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}
