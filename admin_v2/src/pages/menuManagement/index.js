import React,{useEffect} from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import * as MenuAction from "../../redux/actions/MenuAction";
import { useDispatch } from "react-redux";
import UserTableData from "../user-module/user";
import BreadCrumbs from "../../common/bread-crumbs";
import FormHeader from "../../common/form-header";

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

const MenuList = (props) => {

    const dispatch = useDispatch();
    let {
        classes,
      } = props;

    useEffect(() => {
    // dispatch(getReview());
    dispatch(MenuAction.MenuListRequestAsync());
    }, []);
    
    return (
          
        
        <>
        <FormHeader />
        <BreadCrumbs heading1={"MenuManagement"} heading2={"Menu Module List"} />
        <UserTableData/>
        </>
       
    )
}


export default withStyles(styles)(MenuList);

