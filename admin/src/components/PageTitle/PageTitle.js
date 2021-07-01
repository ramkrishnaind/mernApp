import React from "react";
import { Button } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers/Wrappers";

export default function PageTitle(props) {
  var classes = useStyles();

  return (
    <div class="page-header">
      <h1 className={'page-title'}>
        {props.title}
      </h1>
      {props.button && (
        <Button
          classes={{ root: classes.button }}
          variant="contained"
          size="large"
          color="secondary"
        >
          {props.button}
        </Button>
      )}
    </div>
  );
}
