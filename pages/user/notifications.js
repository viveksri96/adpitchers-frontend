import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Sidebar from "../../crm/common/Sidebar";

const styles = {
  root: {
    
  }
}

class Notifications extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state = {

  //   }
  // }
  
  render(){
    const {classes} = this.props
    return(
      <Grid container className={classes.root}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Typography>Notifications</Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Notifications)