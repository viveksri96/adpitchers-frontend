import {Grid, Typography, TextField, Button, Link} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = {
  signupContainer: {
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    maxWidth: '600px',
    minHeight: 'calc(100vh - 60px)',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 10px',
  }  
}

function Signup(props){
  const {classes} = props
  return (
    <Grid container className={classes.signupContainer} spacing={2}>
      <Grid item>
        <Typography variant="h3" style={{fontWeight: 'bold'}}>Sign up</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">Create beautiful marketing websites in hours instead of weeks.</Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <TextField fullWidth margin="normal" label="First Name" variant="outlined" required/>
        </Grid>
        <Grid item xs={6}>
        <TextField fullWidth margin="normal" label="Last Name" variant="outlined" required />  
        </Grid>
      </Grid>
      <TextField fullWidth margin="normal" label="E-mail" variant="outlined" required />
      <TextField fullWidth margin="normal" label="Password" variant="outlined" required />
      <Grid container>
        <Typography align="left" variant="caption"><em>Fields that are marked with * sign are required.</em></Typography>
      </Grid>
      <Button fullWidth style={{marginTop: 20}} size="large" variant="contained" color="primary">Sign up</Button>
      <Grid item>
        <Typography variant="body1" className={classes.newAccText}>
          Already have an account? <Link href="/reset-password"><Typography component="span" style={{fontWeight: '600'}}>Login</Typography></Link>
        </Typography>
      </Grid>
    </Grid>
  )
}


export default withStyles(styles)(Signup)