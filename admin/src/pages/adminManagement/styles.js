//import { createMuiTheme} from "@material-ui/core/styles";


//const theme = createMuiTheme();
const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: 300,
  },
  button: {
    margin: theme.spacing(3),
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default styles;