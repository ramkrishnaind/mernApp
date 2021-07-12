import React from "react";

// set the defaults
const SnackbarContext = React.createContext({
  snackbarData: {},
  setSnackbar: () => {}
});

export default SnackbarContext;