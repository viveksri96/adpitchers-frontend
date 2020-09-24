import { withStyles } from "@material-ui/styles"
import { withRouter } from 'next/router'
import { 
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Collapse,
  Link
} from "@material-ui/core";
import { 
  ExpandLess,
  ExpandMore 
} from "@material-ui/icons";

const styles = theme => ({
  root: {
    height: 'calc(100vh - 72px)',
    borderRight: '1px solid #d8cccc'
  },
  nestedItem: {
    paddingLeft: theme.spacing(4),
  },
  nestedText: {
    fontSize: 14
  }
})

class Sidebar extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      showPaymentMoreOptions: false,
      showBillboardMoreOptions: false,
      showSettingsMoreOptions: false
    }
  }

  render(){
    const { classes } = this.props
    const {showPaymentMoreOptions, showBillboardMoreOptions, showSettingsMoreOptions} = this.state
    return(
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {/* <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem> */}
        <ListItem button onClick={() => this.setState({showBillboardMoreOptions: !showBillboardMoreOptions})}>
          <ListItemText primary="Billboard" />
          {showBillboardMoreOptions ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={showBillboardMoreOptions} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/my-billboard">
              <ListItem button className={classes.nestedItem}>
                <ListItemText primary="My Billboards" classes={{primary: classes.nestedText}} />
              </ListItem>
            </Link>
            <ListItem button className={classes.nestedItem}>
              <ListItemText primary="Booked Billboards" classes={{primary: classes.nestedText}}/>
            </ListItem>
            {/* <ListItem button className={classes.nestedItem}>
              <ListItemText primary="" />
            </ListItem> */}
          </List>
        </Collapse>
        <ListItem button onClick={() => this.setState({showPaymentMoreOptions: !showPaymentMoreOptions})}>
          <ListItemText primary="Payments" />
          {showPaymentMoreOptions ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={showPaymentMoreOptions} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/orders-history">
              <ListItem button className={classes.nestedItem}>
                <ListItemText primary="Orders" classes={{primary: classes.nestedText}}/>
              </ListItem>
            </Link>
            <ListItem button className={classes.nestedItem}>
              <ListItemText primary="Update payment info" classes={{primary: classes.nestedText}}/>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => this.setState({showSettingsMoreOptions: !showSettingsMoreOptions})}>
          <ListItemText primary="Settings" />
          {showSettingsMoreOptions ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={showSettingsMoreOptions} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/user/account">
              <ListItem button className={classes.nestedItem}>
                <ListItemText primary="Account" classes={{primary: classes.nestedText}}/>
              </ListItem>
            </Link>
            <Link href="/user/password-update">
              <ListItem button className={classes.nestedItem}>
                <ListItemText primary="Password update" classes={{primary: classes.nestedText}}/>
              </ListItem>
            </Link>
            <Link href="/user/notifications">
              <ListItem button className={classes.nestedItem}>
                <ListItemText primary="Notifications" classes={{primary: classes.nestedText}}/>
              </ListItem>
            </Link>
            <Link href="/user/help">
              <ListItem button className={classes.nestedItem}>
                <ListItemText primary="Help" classes={{primary: classes.nestedText}}/>
              </ListItem>
            </Link>
          </List>
        </Collapse>
      </List>
    )
  }
}

export default withStyles(styles)(Sidebar)