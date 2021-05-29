import {
  Avatar,
  Box,
  Button,
  Link,
  Popover,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { AccountCircle, ExitToApp, Receipt } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    position: "sticky",
    top: 0,
    padding: "16px 24px",
    borderBottom: "1px solid #eeeeee",
    // borderRadius: 3,
    // boxShadow: '0px 1px 15px 1px rgba(255, 105, 135, .3)',
    background: "white",
  },
  flex: {
    display: "flex",
  },
  logo: {
    marginRight: 42,
  },
  button: {
    height: 40,
    textTransform: "none",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "normal",
  },
  avatar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  authButton: {
    height: 40,
  },
  userDetailsPopover: {
    width: "250px",
    padding: "12px 8px",
  },
  dropdownItem: {
    cursor: "pointer",
    fontSize: 18,
    color: "#4b4c52",
    padding: "10px 8px",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      background: "#e2e8de96",
    },
  },
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("adpitchers_token");
    this.setState({ isAuthenticated: token });
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logout = () => {
    localStorage.removeItem("adpitchers_token");
    window.location.href = window.location.origin;
  };

  render() {
    const { classes } = this.props;
    const { isAuthenticated, anchorEl } = this.state;

    const NAVBAR_BTN = ["Explore"];
    if (!isAuthenticated) NAVBAR_BTN.unshift("How it works");
    function getRouteName(name) {
      if ("How it works") return "/listing";
      else if ("Explore") return "/listing";
      // else if(name === 'Home') return '/'
      // else if(name === 'About') return '/about'
    }
    return (
      <div>
        <Grid container className={classes.root}>
          <Grid item xs={8} className={classes.flex}>
            <Link href="/">
              <Avatar
                className={classes.logo}
                alt="logo"
                src="https://tl.vhv.rs/dpng/s/416-4160680_from-liquipedia-playerunknowns-battlegrounds-wiki-logo-png-for.png"
              />
            </Link>
            {NAVBAR_BTN.map((buttonName, i) => (
              <Link
                href={getRouteName(buttonName)}
                key={`button:${buttonName}:${i}`}
              >
                <Button className={`${classes.button}`}>
                  <Typography variant="h1" className={classes.buttonText}>
                    {buttonName}
                  </Typography>
                </Button>
              </Link>
            ))}
          </Grid>
          <Grid item xs={4} className={classes.avatar}>
            {!isAuthenticated && (
              <>
                <Link href="/login">
                  <Button color="primary" className={classes.authButton}>
                    LOGIN
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button color="primary" className={classes.authButton}>
                    SIGN UP
                  </Button>
                </Link>
              </>
            )}
            {/* <Button variant="contained" color="secondary" className={classes.authButton}>POST A BID</Button> */}
            {isAuthenticated && (
              <div>
                <Typography
                  onClick={this.handleClick}
                  style={{ height: "100%", padding: "8px 0px" }}
                >
                  Hi! User
                </Typography>
                <Popover
                  id={"user-details-popover"}
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={this.handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <Box className={classes.userDetailsPopover}>
                    <Link href={"/user/account"}>
                      <Typography align="left" className={classes.dropdownItem}>
                        <AccountCircle style={{ marginRight: 6 }} />
                        Your Account
                      </Typography>
                    </Link>
                    <Link href={"/user/order-history"}>
                      <Typography align="left" className={classes.dropdownItem}>
                        <Receipt style={{ marginRight: 6 }} />
                        Your Orders
                      </Typography>
                    </Link>
                    {/*<Link href={"/user/account"}>
                      <Typography align="left" className={classes.dropdownItem}>
                        <Settings style={{ marginRight: 6 }} /> Settings
                      </Typography>
                    </Link>*/}
                    <Typography
                      align="left"
                      className={classes.dropdownItem}
                      onClick={this.logout}
                    >
                      <ExitToApp style={{ marginRight: 6 }} />
                      Logout
                    </Typography>
                  </Box>
                </Popover>
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
