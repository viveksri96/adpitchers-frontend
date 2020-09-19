import Grid from '@material-ui/core/Grid';
import { Button, Avatar, Typography, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    position: 'sticky',
    top: 0,
    padding: '16px 24px',
    borderBottom: '1px solid #eeeeee',
    // borderRadius: 3,
    // boxShadow: '0px 1px 15px 1px rgba(255, 105, 135, .3)',
    background: 'white',
  },
  flex: {
    display: 'flex'
  },
  logo: {
    marginRight: 42
  },
  button: {
    height: 40,
    textTransform: 'none',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  avatar: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  authButton: {
    height: 40
  }
};

class Navbar extends React.Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    let token = localStorage.getItem('adpitchers_token')
    this.setState({isAuthenticated: token})
  }
  
  render(){
    const {classes} = this.props
    const {isAuthenticated} = this.state
    function getRouteName(name){

      if('How it works') return '/listing'
      else if('Explore') return '/listing'
      // else if(name === 'Home') return '/'
      // else if(name === 'About') return '/about'
    }
    return(
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
            {
              ['How it works', 'Explore'].map((buttonName, i) => (
                <Link href={getRouteName(buttonName)} key={`button:${buttonName}:${i}`}>
                  <Button className={`${classes.button}`}>
                    <Typography variant='h1' className={classes.buttonText}>
                      {buttonName}
                    </Typography>
                  </Button>
                </Link>
              ))
            }
          </Grid>
          <Grid item xs={4} className={classes.avatar}>
            {
              !isAuthenticated &&
              <>
                <Link href="/login">
                  <Button color="primary" className={classes.authButton}>LOGIN</Button>
                </Link>
                <Link href="/signup">
                  <Button color="primary" className={classes.authButton}>SIGN UP</Button>
                </Link>
              </>
            }
            {/* <Button variant="contained" color="secondary" className={classes.authButton}>POST A BID</Button> */}
            {
              isAuthenticated && <Avatar alt="Remy Sharp" src="https://api.adorable.io/avatars/285/abott@adorable.png" />
            }
          </Grid>
        </Grid>
      </div>
    )
  }
}


export default withStyles(styles)(Navbar)