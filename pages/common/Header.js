import Grid from '@material-ui/core/Grid';
import { Button, Avatar, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
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
});

export default function Header() {
  const classes = useStyles()
  function getRouteName(name){

    if('How it works') return '/listing'
    else if('Explore') return '/listing'
    // else if(name === 'Home') return '/'
    // else if(name === 'About') return '/about'
  }
  return(
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
        <Button color="primary" className={classes.authButton}>LOGIN</Button>
        <Button color="primary" className={classes.authButton}>SIGN UP</Button>
        <Button variant="contained" color="secondary" className={classes.authButton}>POST A BID</Button>
        {/* <Avatar alt="Remy Sharp" src="https://api.adorable.io/avatars/285/abott@adorable.png" /> */}
      </Grid>
    </Grid>
  )
}

