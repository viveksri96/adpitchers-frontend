import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {},
};

class Query extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return <Grid container className={classes.root} spacing={2}></Grid>;
  }
}

export default withStyles(styles)(Query);
