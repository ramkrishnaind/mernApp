import React,{useEffect} from "react";
import {
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import * as MenuAction from "../../redux/actions/MenuAction";
import { useDispatch } from "react-redux";
import TableData from "./list";
import BreadCrumbs from "../../common/bread-crumbs";
import FormHeader from "../../common/form-header";
import { connect } from "react-redux";

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
        menu,
      } = props;

    useEffect(() => {
    dispatch(MenuAction.MenuListRequestAsync());
    }, []);
    
    return (
        <>
        <FormHeader />
        <BreadCrumbs heading1={"MenuManagement"} heading2={"Menu Module List"} />

        {menu.list && menu.list.length > 0 ? (
            <>
              <TableData
                data={menu.list}
              />
            </>
          ) : (
            <Typography>Data not found.</Typography>
          )}
        </>
    );
    
} 


function mapStateToProps(state) {
  const { menu } = state;
  return {
    menu,
    
  };
}
export default connect(mapStateToProps)(
  withStyles(styles)(MenuList),
);


