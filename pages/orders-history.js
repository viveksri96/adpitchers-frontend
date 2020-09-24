import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Sidebar from "../crm/common/Sidebar";
import Table from '../crm/orders/Table'

const styles = {
  root: {
    
  },
  orderContainer: {
    padding: 18,
    paddingBottom: 0
  },
  
}

class Orders extends React.Component{
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
        <Grid item xs={10} className={classes.orderContainer}>
          <Table />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Orders)