import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Sidebar from "../crm/common/Sidebar";

const styles = {
  root: {
    
  }
}

class Dashboard extends React.Component{
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

        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Dashboard)