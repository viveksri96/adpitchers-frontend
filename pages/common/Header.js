import Grid from '@material-ui/core/Grid';
import { Button, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: '16px 24px',
    border: 0,
    borderRadius: 3,
    boxShadow: '0px 1px 15px 1px rgba(255, 105, 135, .3)',
    color: 'white',
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
    fontSize: 32,
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
  console.log(classes)
  return(
    <Grid container className={classes.root}>
      <Grid item xs="8" className={classes.flex}>
        <Avatar 
          className={classes.logo} 
          alt="logo" 
          src="https://tl.vhv.rs/dpng/s/416-4160680_from-liquipedia-playerunknowns-battlegrounds-wiki-logo-png-for.png" 
        />
        {
          ['Home', 'Billboards', 'Ads', 'About'].map(buttonName => (
            <Button className={`${classes.button}`} >
              <Typography variant='h1' className={classes.buttonText}>
                {buttonName}
              </Typography>
            </Button>
          ))
        }
      </Grid>
      <Grid item xs="4" className={classes.avatar}>
        <Button variant="contained" color="primary" className={classes.authButton}>Signup</Button>
        <Button color="primary" className={classes.authButton}>Login</Button>
        {/* <Avatar alt="Remy Sharp" src="https://api.adorable.io/avatars/285/abott@adorable.png" /> */}
      </Grid>
    </Grid>
  )
}

