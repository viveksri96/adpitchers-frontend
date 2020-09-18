import { withStyles } from "@material-ui/styles"
import { Grid, TextField, Button, Typography, Link } from "@material-ui/core"
import {Axios} from './config/environment'

const styles = {
  loginContainer: {
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    maxWidth: '600px',
    minHeight: 'calc(100vh - 60px)',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 10px',
  },
  newAccText:{
    color: "#546e7a",
  }
}

function Login(props){
  const {classes} = props

  
  return (
    <Grid container className={classes.loginContainer} spacing={2}>
      <Grid item>
        <Typography variant="h3" style={{fontWeight: 'bold'}}>Sign in</Typography>
      </Grid>
      <Grid item className={classes.newAccText}>
        <Typography variant="h6" >
          Don't have an account? <Link href="/signup"><Typography component="span" style={{fontWeight: '600'}}>Sign up.</Typography></Link>
        </Typography>
      </Grid>
      <TextField fullWidth margin="normal" label="E-mail" variant="outlined" required />
      <TextField fullWidth margin="normal" label="Password" variant="outlined" required />
      <Grid container>
        <Typography align="left" variant="caption"><em>Fields that are marked with * sign are required.</em></Typography>
      </Grid>
      <Button style={{marginTop: 20}} fullWidth size="large" variant="contained" color="primary" onClick={handleClick}>Login</Button>
      <Grid item>
        <Typography variant="body1" className={classes.newAccText}>
          Forgot your password? <Link href="/reset-password"><Typography component="span" style={{fontWeight: '600'}}>Reset Password</Typography></Link>
        </Typography>
      </Grid>
    </Grid>
  )
}


const handleClick = () => {
  const input = {
    "email": "admin@admin.com",
    "password": "123"
  }
  Axios.post('/login/', input).then(res => {
    localStorage.setItem('adpitchers_token', res.data.token)
    window.location.replace(window.location.origin + '/')
  })
}

export default withStyles(styles)(Login)