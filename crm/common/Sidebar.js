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
  ExpandMore,
  Settings,
} from "@material-ui/icons";

const styles = theme => ({
  root: {
    minHeight: 'calc(100vh - 72px)',
    borderRight: '1px solid #eeeeee'
  },
  listHeading: {
    fontWeight: 600,
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
      showSettingsMoreOptions: false,
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
        <ListItem 
          button 
          onClick={() => this.setState({showBillboardMoreOptions: !showBillboardMoreOptions})} 
          divider={true}
        >
          <ListItemText primary="Billboard" classes={{primary: classes.listHeading}} />
          {showBillboardMoreOptions ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={showBillboardMoreOptions} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/my-billboard">
              <ListItem button className={classes.nestedItem}>
                <ListItemText primary="My Billboards" classes={{primary: classes.nestedText}} />
              </ListItem>
            </Link>
            <ListItem button className={classes.nestedItem} divider={true}>
              <ListItemText primary="Booked Billboards" classes={{primary: classes.nestedText}}/>
            </ListItem>
            {/* <ListItem button className={classes.nestedItem}>
              <ListItemText primary="" />
            </ListItem> */}
          </List>
        </Collapse>
        <ListItem 
          button 
          onClick={() => this.setState({showPaymentMoreOptions: !showPaymentMoreOptions})}
          divider={true}
        >
          <ListItemText primary="Payments" classes={{primary: classes.listHeading}}/>
          {showPaymentMoreOptions ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={showPaymentMoreOptions} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/orders-history">
              <ListItem button className={classes.nestedItem}>
                <ListItemText primary="Orders" classes={{primary: classes.nestedText}}/>
              </ListItem>
            </Link>
            <ListItem button className={classes.nestedItem} divider={true}>
              <ListItemText primary="Update payment info" classes={{primary: classes.nestedText}}/>
            </ListItem>
          </List>
        </Collapse>
        <ListItem 
          button
          onClick={() => this.setState({showSettingsMoreOptions: !showSettingsMoreOptions})}
          divider={true}
        >
          {/* <Settings fontSize="small" /> */}
          <ListItemText primary="Settings" classes={{primary: classes.listHeading}}/>
          {showSettingsMoreOptions ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={showSettingsMoreOptions} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/user/account">
              <ListItem button className={classes.nestedItem}>
                <ListItemText primary="Account" classes={{primary: classes.nestedText}}/>
              </ListItem>
            </Link>
            {/* <Link href="/user/password-update">
              <ListItem button className={classes.nestedItem}>
                <ListItemText primary="Password update" classes={{primary: classes.nestedText}}/>
              </ListItem>
            </Link> */}
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